import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RandomTriviaComponent } from "./random-trivia.component";

@NgModule({
    declarations: [
        RandomTriviaComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        RandomTriviaComponent
    ]
})
export class RandomTriviaModule{}