import React, { useState } from 'react';
import type { Team } from '../types/teams';

interface TeamSetupProps {
  onStart: (teams: Team[]) => void;
}

export const TeamSetup: React.FC<TeamSetupProps> = ({ onStart }) => {
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');

  const handleStart = () => {
    if (team1Name.trim() && team2Name.trim()) {
      const teams: Team[] = [
        { name: team1Name.trim(), score: 0, color: '#E94E18' },
        { name: team2Name.trim(), score: 0, color: '#312C86' }
      ];
      onStart(teams);
    }
  };

  return (
    <div className="app-container flex items-center justify-center">
      <div className="setup-container">
        <h1 className="setup-title">COMPETICIÓN DE DECIBELIOS</h1>
        
        <div className="setup-form">
          <div className="team-input-group">
            <label className="team-label">EQUIPO 1</label>
            <input
              type="text"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
              placeholder="Nombre del Equipo 1"
              className="team-input"
              style={{ borderColor: '#E94E18' }}
              maxLength={30}
            />
          </div>

          <div className="team-input-group">
            <label className="team-label">EQUIPO 2</label>
            <input
              type="text"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
              placeholder="Nombre del Equipo 2"
              className="team-input"
              style={{ borderColor: '#312C86' }}
              maxLength={30}
            />
          </div>

          <button
            onClick={handleStart}
            disabled={!team1Name.trim() || !team2Name.trim()}
            className="start-button"
          >
            COMENZAR COMPETICIÓN
          </button>
        </div>
      </div>
    </div>
  );
};
