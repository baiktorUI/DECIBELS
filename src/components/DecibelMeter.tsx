import React, { useEffect, useState, useRef } from 'react';
import type { Team } from '../types/teams';
import { simulateDecibels } from '../utils/audioSimulation';

interface DecibelMeterProps {
  team: Team;
  teamNumber: number;
  onComplete: (score: number) => void;
}

export const DecibelMeter: React.FC<DecibelMeterProps> = ({ team, teamNumber, onComplete }) => {
  const [currentDb, setCurrentDb] = useState(60);
  const [history, setHistory] = useState<number[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const DURATION = 10000; // 10 segundos
  const UPDATE_INTERVAL = 100; // actualizar cada 100ms

  useEffect(() => {
    // Iniciar después de 1 segundo
    const startTimer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    intervalRef.current = window.setInterval(() => {
      setTimeElapsed((prev) => {
        const newTime = prev + UPDATE_INTERVAL;
        
        if (newTime >= DURATION) {
          setIsActive(false);
          if (intervalRef.current) clearInterval(intervalRef.current);
          
          // Calcular puntuación final (máximo de la historia)
          setTimeout(() => {
            const maxScore = Math.max(...history, currentDb);
            onComplete(maxScore);
          }, 500);
          
          return DURATION;
        }
        
        const newDb = simulateDecibels(newTime, DURATION);
        setCurrentDb(newDb);
        setHistory((prev) => [...prev, newDb]);
        
        return newTime;
      });
    }, UPDATE_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, history, currentDb, onComplete]);

  const progress = (timeElapsed / DURATION) * 100;
  const maxDb = Math.max(...history, currentDb);

  return (
    <div className="app-container flex items-center justify-center">
      <div className="meter-container">
        {/* Indicador de equipo */}
        <div className="team-indicator" style={{ backgroundColor: team.color }}>
          <span className="team-indicator-text">
            {teamNumber === 1 ? 'PRIMER' : 'SEGUNDO'} EQUIPO
          </span>
        </div>

        {/* Nombre del equipo */}
        <div className="team-name-display">
          <h2 className="team-name" style={{ color: team.color }}>
            {team.name}
          </h2>
        </div>

        {/* Medidor principal */}
        <div className="decibel-display">
          <div className="decibel-value">{currentDb}</div>
          <div className="decibel-unit">dB</div>
        </div>

        {/* Barra de progreso de tiempo */}
        <div className="time-progress-container">
          <div className="time-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {/* Gráfica de decibelios */}
        <div className="graph-container">
          <svg width="100%" height="200" viewBox="0 0 700 200" preserveAspectRatio="none">
            {/* Líneas de referencia */}
            <line x1="0" y1="200" x2="700" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="0" y1="150" x2="700" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="100" x2="700" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="50" x2="700" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="0" y1="0" x2="700" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            
            {/* Etiquetas de dB */}
            <text x="5" y="15" fill="rgba(255,255,255,0.5)" fontSize="12">120 dB</text>
            <text x="5" y="105" fill="rgba(255,255,255,0.5)" fontSize="12">90 dB</text>
            <text x="5" y="195" fill="rgba(255,255,255,0.5)" fontSize="12">60 dB</text>

            {/* Línea de la gráfica */}
            {history.length > 1 && (
              <>
                <polyline
                  points={history
                    .map((db, i) => {
                      const x = (i / (history.length - 1)) * 700;
                      const y = 200 - ((db - 60) / 60) * 200;
                      return `${x},${y}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke={team.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Área bajo la curva */}
                <polygon
                  points={`0,200 ${history
                    .map((db, i) => {
                      const x = (i / (history.length - 1)) * 700;
                      const y = 200 - ((db - 60) / 60) * 200;
                      return `${x},${y}`;
                    })
                    .join(' ')} 700,200`}
                  fill={team.color}
                  fillOpacity="0.2"
                />
              </>
            )}
          </svg>
        </div>

        {/* Estadísticas */}
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-label">MÁXIMO</div>
            <div className="stat-value">{maxDb} dB</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">TIEMPO</div>
            <div className="stat-value">{(timeElapsed / 1000).toFixed(1)}s</div>
          </div>
        </div>
      </div>
    </div>
  );
};
