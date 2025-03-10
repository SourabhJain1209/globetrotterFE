import { NgModule } from "@angular/core";
import { WorldTimeComponent } from "./worldtime.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        WorldTimeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
        
    ],
    exports: [
        WorldTimeComponent
    ]
})
export class WorldTimeModule{}
