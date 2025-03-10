import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { User, UserDto } from '../../models/destination.model';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  username: string = '';
  showQuiz = false
  showStats = false
  questionCount = 0;
  userId: any
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  score: number = 0;
  selectedOption: any = null;
  challengerScore: any
  challengerName: any
  showStart = true
  challengeMessage = ''
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
    const inviteCode = this.route.snapshot.params['inviteCode'];
    if (inviteCode) {
      this.getChallengeData(inviteCode)
    }
  }

  challengeData: any
  getChallengeData(id: number) {
    this.gameService.GetChallengeData(id).subscribe({
      next: (res) => {
        if (res.isSuccess) {
          this.challengeData = res.data
          this.username = res.data.challengeToUsername;
          this.userId = res.data.challengedToId;
          this.challengerScore = res.data.challengerScore
          this.challengerName = res.data.challengerUsername
        }
      }
    })
  }
  quizData: any;
  startGame() {
    if (this.questionCount <= 10) {
      this.gameService.CreateQuiz().subscribe({
        next: (res) => {
          if (res.isSuccess) {
            this.showQuiz = true
            this.showStart = false
            this.quizData = res.data;
            this.questionCount += 1;
          }
        }
      })
    }
    else {
      this.showQuiz = false;
      this.showStats = true;

      if(this.score > this.challengerScore){
        this.challengeMessage = "Hurray You WON! Splendid 👏" 
      }
      else if(this.score < this.challengerScore){
        this.challengeMessage = "You can do better. Shh! we won't tell any one 🤫"
      }
      else{
        this.challengeMessage = "Its a draw! You can still be friends 🤝"
      }

      let request: UserDto = {
        Id: this.userId,
        Username: this.username,
        Score: this.score,
        CorrectAnswers: this.correctAnswer,
        IncorrectAnswers: this.incorrectAnswer
      }

      this.gameService.SaveUserScore(request).subscribe({
        next: (res) => {
          if (res.isSuccess) {
            console.log("saved")
          }
        }
      })
    }
  }
  checkAnswer(option: any) {
    this.selectedOption = option;
    if (option.isCorrect) {
      this.correctAnswer += 1;
      this.score += 3;
    } else {
      this.incorrectAnswer += 1;
      this.score -= 1;
    }
  }
}