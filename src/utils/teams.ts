export interface Team {
  name: string;
  score: number;
  color: string;
}

export interface GameState {
  currentTeam: number;
  teams: Team[];
  isRecording: boolean;
  hasFinished: boolean;
}
