import { NgModule } from "@angular/core";
import { RandomFactComponent } from "./random-fact.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        RandomFactComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        RandomFactComponent
    ]
})
export class RandomFactModule{}