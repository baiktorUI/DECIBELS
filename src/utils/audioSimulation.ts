export const simulateDecibels = (timeElapsed: number, duration: number): number => {
  // Genera valores aleatorios de decibelios que aumentan gradualmente
  const progress = timeElapsed / duration;
  
  // Base aleatoria entre 60-90 dB
  const baseNoise = 60 + Math.random() * 30;
  
  // Picos aleatorios que aumentan con el tiempo
  const peak = progress * 40 * Math.random();
  
  // Variación aleatoria
  const variation = (Math.random() - 0.5) * 15;
  
  // Resultado final entre 60-120 dB
  const result = Math.min(120, Math.max(60, baseNoise + peak + variation));
  
  return Math.round(result);
};

export const generateDecibelHistory = (duration: number, interval: number): number[] => {
  const history: number[] = [];
  const steps = Math.floor(duration / interval);
  
  for (let i = 0; i <= steps; i++) {
    const timeElapsed = i * interval;
    history.push(simulateDecibels(timeElapsed, duration));
  }
  
  return history;
};

export const getMaxDecibel = (history: number[]): number => {
  return Math.max(...history);
};

export const getAverageDecibel = (history: number[]): number => {
  const sum = history.reduce((acc, val) => acc + val, 0);
  return Math.round(sum / history.length);
};
