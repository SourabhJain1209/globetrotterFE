// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { GameService } from '../../services/game.service';
// import { Destination, GameState } from '../../models/destination.model';
// import confetti from 'canvas-confetti';

// @Component({
//   selector: 'app-game',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="max-w-2xl mx-auto">
//       <div *ngIf="gameState" class="card mb-6">
//         <div class="flex justify-between items-center mb-6">
//           <div class="text-lg font-semibold">
//             Score: {{ score.correct }} / {{ score.correct + score.incorrect }}
//           </div>
//           <button (click)="createChallenge()" class="btn btn-secondary">
//             Challenge a Friend
//           </button>
//         </div>

//         <div class="mb-6">
//           <h3 class="text-xl font-bold mb-4">Guess the Destination</h3>
//           <div class="space-y-2">
//             <p *ngFor="let clue of getClues(gameState.currentDestination)" 
//                class="p-3 bg-gray-100 rounded">
//               {{ clue }}
//             </p>
//           </div>
//         </div>

//         <div class="grid grid-cols-2 gap-4">
//           <button *ngFor="let option of gameState.options"
//                   (click)="checkAnswer(option)"
//                   [disabled]="gameState.showResult"
//                   class="btn"
//                   [class.btn-primary]="!gameState.showResult"
//                   [class.bg-green-500]="gameState.showResult && option === gameState.currentDestination.name && option === gameState.selectedAnswer"
//                   [class.bg-red-500]="gameState.showResult && option === gameState.selectedAnswer && option !== gameState.currentDestination.name">
//             {{ option }}
//           </button>
//         </div>

//         <div *ngIf="gameState.showResult" class="mt-6">
//           <div [class.text-green-600]="gameState.isCorrect"
//                [class.text-red-600]="!gameState.isCorrect"
//                class="text-lg font-bold mb-2">
//             {{ gameState.isCorrect ? '🎉 Correct!' : '😢 Wrong!' }}
//           </div>
//           <p class="mb-4">{{ currentFunFact }}</p>
//           <button (click)="loadNextDestination()" class="btn btn-primary">
//             Next Destination
//           </button>
//         </div>
//       </div>
//     </div>
//   `
// })
// export class GameComponent implements OnInit {
//   gameState: GameState | null = null;
//   score = { correct: 0, incorrect: 0 };
//   currentFunFact = '';

//   constructor(private gameService: GameService) {}

//   ngOnInit() {
//     this.loadNextDestination();
//   }

//   getClues(destination: Destination): string[] {
//     return destination.clues.split(',').map(clue => clue.trim());
//   }

//   loadNextDestination() {
//     this.gameService.getRandomDestination().subscribe(({ destination, options }) => {
//       this.gameState = {
//         currentDestination: destination,
//         options,
//         showResult: false
//       };
//     });
//   }

//   checkAnswer(answer: string) {
//     if (!this.gameState) return;

//     this.gameState.selectedAnswer = answer;
//     this.gameService.verifyAnswer(this.gameState.currentDestination.id, answer)
//       .subscribe(({ correct, funFact }) => {
//         if (correct) {
//           this.score.correct++;
//           this.triggerConfetti();
//         } else {
//           this.score.incorrect++;
//         }

//         this.gameState!.isCorrect = correct;
//         this.gameState!.showResult = true;
//         this.currentFunFact = funFact;
//       });
//   }

//   createChallenge() {
//     this.gameService.createChallenge().subscribe(({ inviteCode, imageUrl }) => {
//       const shareText = `Can you beat my score of ${this.score.correct} in Globetrotter? Try it here: ${window.location.origin}/challenge/${inviteCode}`;
      
//       // Open WhatsApp share dialog
//       window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
//     });
//   }

//   private triggerConfetti() {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     });
//   }
// }