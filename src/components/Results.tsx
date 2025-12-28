import React, { useEffect, useRef } from 'react';
import type { Team } from '../types/teams';
import { launchFireworks, launchSchoolPride } from '../utils/confetti';

interface ResultsProps {
  teams: Team[];
  onReset: () => void;
}

export const Results: React.FC<ResultsProps> = ({ teams, onReset }) => {
  const fireworksRef = useRef<number | null>(null);
  const schoolPrideRef = useRef<number | null>(null);

  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const winner = sortedTeams[0];
  const isDraw = sortedTeams[0].score === sortedTeams[1].score;

  useEffect(() => {
    launchFireworks(fireworksRef);
    launchSchoolPride(schoolPrideRef);

    return () => {
      if (fireworksRef.current) clearInterval(fireworksRef.current);
      if (schoolPrideRef.current) cancelAnimationFrame(schoolPrideRef.current);
    };
  }, []);

  return (
    <div className="app-container flex items-center justify-center">
      <div className="results-container">
        <div className="results-title">
          {isDraw ? '¡EMPATE!' : '¡GANADOR!'}
        </div>

        {isDraw ? (
          <div className="draw-message">
            <div className="winner-name" style={{ color: '#FFD700' }}>
              ¡HAY EMPATE!
            </div>
            <div className="winner-score">
              {sortedTeams[0].score} dB
            </div>
          </div>
        ) : (
          <div className="winner-section">
            <div className="trophy">🏆</div>
            <div className="winner-name" style={{ color: winner.color }}>
              {winner.name}
            </div>
            <div className="winner-score">
              {winner.score} dB
            </div>
          </div>
        )}

        <div className="results-divider" />

        <div className="results-table">
          <div className="results-header">RESULTADOS FINALES</div>
          
          {sortedTeams.map((team, index) => (
            <div key={team.name} className="result-row">
              <div className="result-position">
                {index === 0 ? '🥇' : '🥈'}
              </div>
              <div className="result-team-name" style={{ color: team.color }}>
                {team.name}
              </div>
              <div className="result-score">
                {team.score} dB
              </div>
            </div>
          ))}
        </div>

        <button onClick={onReset} className="reset-button">
          NUEVA COMPETICIÓN
        </button>
      </div>
    </div>
  );
};
