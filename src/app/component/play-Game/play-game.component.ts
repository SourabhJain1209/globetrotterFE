import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CreateChallenge, UserDto } from "../../models/destination.model";
import { GameService } from "../../services/game.service";
import * as bootstrap from "bootstrap";
@Component({
    selector: 'app-play-game',
    templateUrl: './play-game.component.html',
    styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
    username: string = '';
    showInput: boolean = false
    showLetsplay: boolean = true
    userId: any = null
    correctAnswer: number = 0;
    incorrectAnswer: number = 0;
    score: number = 0;
    selectedOption: any = null;
    showQuiz = false
    showStats = false;
    questionCount: number = 0
    whatsAppMessage = ''
    constructor(private service: GameService
    ) { }

    ngOnInit(): void {

    }
    letsPlayAGame() {
        this.showInput = true;
        this.showLetsplay = false;
    }

    message: string = ''
    PlayGame() {
        let request: UserDto = {
            Id: 0,
            Username: this.username,
            Score: 0,
            CorrectAnswers: 0,
            IncorrectAnswers: 0
        }

        this.service.CreateUser(request).subscribe({
            next: (res) => {
                if (res.isSuccess) {
                    this.userId = res.data
                    this.showInput = false
                    this.showQuiz = true
                    this.startGame()
                }
                else {
                    this.message = res.message
                }
            }
        })
    }

    quizData: any;
    startGame() {
        if (this.questionCount <= 10) {
            this.service.CreateQuiz().subscribe({
                next: (res) => {
                    if (res.isSuccess) {
                        this.quizData = res.data;
                        this.questionCount += 1;
                    }
                }
            })
        }
        else{
            this.showQuiz = false;
            this.showStats = true;
            let request: UserDto = {
                Id: this.userId,
                Username: this.username,
                Score: this.score,
                CorrectAnswers: this.correctAnswer,
                IncorrectAnswers: this.incorrectAnswer
            }

            this.service.SaveUserScore(request).subscribe({
                next: (res) => {
                    if(res.isSuccess){
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

    challengeName: string = '';

    @ViewChild('whatsappModal', { static: false }) whatsappModal!: ElementRef;
    whatsappShareUrl: string = '';
    openWhatsAppShare() {
        const message = `🎉 I just completed a quiz! ✅ Correct Answers: ${this.correctAnswer}, ❌ Incorrect: ${this.incorrectAnswer}, ⭐ Score: ${this.score}. Try it out! 🚀`;
        this.whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    
        // Open modal
        const modal = new bootstrap.Modal(this.whatsappModal.nativeElement);
        modal.show();
      }
    
      closeModal() {
        const modal = new bootstrap.Modal(this.whatsappModal.nativeElement);
        modal.hide();
      }

      isShareDisabled: boolean = true;
      updateButtonState() {
        this.isShareDisabled = !this.challengeName.trim();
      }
    
      createChallenge() {
        if (!this.challengeName.trim()) return;
      
        let req: CreateChallenge = {
          challengerId: this.userId,
          challengeName: this.challengeName
        };
      
        this.service.CreateChallenge(req).subscribe(response => {
          if (response?.isSuccess) {
            const userId = response.data;
            const siteUrl = `${window.location.origin}/challenge/${userId}`;
            const message = `I challenge you! Try beating my score. Click here to play: ${siteUrl}`;
      
            console.log(message)
            // WhatsApp Share Link
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      
            // Ensure the modal exists before trying to close it
            const modalElement = document.getElementById('shareChallengeModal');
            if (modalElement) {
              const modal = bootstrap.Modal.getInstance(modalElement);
              modal?.hide(); // Use optional chaining to prevent errors
            }
      
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
          }
        });
      }
      
}