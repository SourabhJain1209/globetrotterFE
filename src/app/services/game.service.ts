import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse, ChallengeDataDTO, CreateChallenge, Destination, GameState, RandomFact, User, UserDto } from '../models/destination.model';

// const API_URL = 'https://localhost:44383/api';
const API_URL = 'https://globetrotterapi.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameState = new BehaviorSubject<GameState | null>(null);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  getRandomFact(): Observable<ApiResponse<RandomFact>> {
    return this.http.get<ApiResponse<RandomFact>>(`${API_URL}/destinations/getRandomFact`);
  }
  getRandomTrivia(): Observable<ApiResponse<RandomFact>> {
    return this.http.get<ApiResponse<RandomFact>>(`${API_URL}/destinations/getRandomTrivia`);
  }

  CreateUser(user: UserDto): Observable<ApiResponse<number>>{
    return this.http.post<ApiResponse<number>>(`${API_URL}/user/CreateUser`, user);
  }

  CreateQuiz(): Observable<ApiResponse<RandomFact>> {
    return this.http.get<ApiResponse<RandomFact>>(`${API_URL}/games/CreateQuiz`);
  }

  SaveUserScore(user: UserDto): Observable<ApiResponse<number>> {
    return this.http.post<ApiResponse<number>>(`${API_URL}/user/SaveUserScore`, user);
  }

  CreateChallenge(request: CreateChallenge): Observable<ApiResponse<number>> {
    return this.http.post<ApiResponse<number>>(`${API_URL}/challenges/CreateChallenge`, request);
  }

  GetChallengeData(id: number): Observable<ApiResponse<ChallengeDataDTO>> {
    return this.http.get<ApiResponse<ChallengeDataDTO>>(`${API_URL}/challenges/GetChallengeData/${id}`);
  }
}