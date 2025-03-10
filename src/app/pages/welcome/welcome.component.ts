import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { WorldTimeModule } from '../../component/world-time/worldtime.module';
import { WeatherModule } from '../../component/weather/weather.module';
import { RandomFactModule } from '../../component/randomFact/random-fact.module';
import { RandomTriviaModule } from '../../component/random-trivia/random-trivia.module';
//import { GameComponent } from '../game/game.component';
import { PlayGameModule } from '../../component/play-Game/play-game.module';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule, WorldTimeModule, WeatherModule, RandomFactModule, RandomTriviaModule,  PlayGameModule],
  templateUrl: './welcome.component.html',
  styleUrls:['./welcome.component.scss']
})
export class WelcomeComponent {
  username = '';
  isLoading = false;

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  // startGame() {
  //   if (!this.username) return;
    
  //   this.isLoading = true;
  //   this.gameService.createUser(this.username).subscribe({
  //     next: (user) => {
  //       this.gameService.setCurrentUser(user);
  //       this.router.navigate(['/game']);
  //     },
  //     error: (error) => {
  //       console.error('Error creating user:', error);
  //       this.isLoading = false;
  //     }
  //   });
  // }
}