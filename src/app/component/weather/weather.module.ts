import { NgModule } from "@angular/core";
import { WeatherComponent } from "./weather.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        WeatherComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
        
    ],
    exports: [
        WeatherComponent
    ]
})
export class WeatherModule{}