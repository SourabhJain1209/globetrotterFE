export interface ApiResponse<T> {
    isSuccess: boolean;
    message: string;
    data: T;
    error?: string;
  }

export interface Destination {
    id: string;
    name: string;
    clues: string;
    funFacts: string;
    trivia: string;
    imageUrl?: string;
  }
  
  export interface User {
    id: string;
    username: string;
    score: {
      correct: number;
      incorrect: number;
    };
  }
  
  export interface GameState {
    currentDestination: Destination;
    options: string[];
    selectedAnswer?: string;
    isCorrect?: boolean;
    showResult: boolean;
  }

  export interface RandomFact{
    destination: string;
    fact: string;
    country: string
  }

  export interface UserDto{
    Id: number
    Username: string
    Score: number
    CorrectAnswers: number
    IncorrectAnswers: number
  }

export interface CreateChallenge
{
  challengerId: number
  challengeName: string
}

export interface ChallengeDataDTO
{
  challengerId: number
  challengerScore: number
  challengedToId: number
  challengerUsername: string
  challengeToUsername: string
}