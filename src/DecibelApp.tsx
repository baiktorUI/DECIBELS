import React, { useState } from 'react';
import { TeamSetup } from './components/TeamSetup';
import { DecibelMeter } from './components/DecibelMeter';
import { Results } from './components/Results';
import type { Team, GameState } from './types/teams';
import './index.css';
import './DecibelApp.css';

const DecibelApp: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentTeam: 0,
    teams: [],
    isRecording: false,
    hasFinished: false,
  });

  const handleStart = (teams: Team[]) => {
    setGameState({
      currentTeam: 0,
      teams,
      isRecording: true,
      hasFinished: false,
    });
  };

  const handleTeamComplete = (score: number) => {
    setGameState((prev) => {
      const updatedTeams = [...prev.teams];
      updatedTeams[prev.currentTeam].score = score;

      // Si es el segundo equipo, terminar
      if (prev.currentTeam === 1) {
        return {
          ...prev,
          teams: updatedTeams,
          isRecording: false,
          hasFinished: true,
        };
      }

      // Pasar al siguiente equipo
      return {
        ...prev,
        teams: updatedTeams,
        currentTeam: 1,
        isRecording: true,
      };
    });
  };

  const handleReset = () => {
    setGameState({
      currentTeam: 0,
      teams: [],
      isRecording: false,
      hasFinished: false,
    });
  };

  // Pantalla de configuración
  if (gameState.teams.length === 0) {
    return <TeamSetup onStart={handleStart} />;
  }

  // Pantalla de resultados
  if (gameState.hasFinished) {
    return <Results teams={gameState.teams} onReset={handleReset} />;
  }

  // Pantalla de medición
  return (
    <DecibelMeter
      team={gameState.teams[gameState.currentTeam]}
      teamNumber={gameState.currentTeam + 1}
      onComplete={handleTeamComplete}
    />
  );
};

export default DecibelApp;
