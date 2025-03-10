import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PlayGameComponent } from "./play-game.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        PlayGameComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PlayGameComponent
    ]
})
export class PlayGameModule {}