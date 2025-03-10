import { Component, OnInit } from "@angular/core";
import { RandomFact } from "../../models/destination.model";
import { GameService } from "../../services/game.service";

@Component({
    selector: 'app-random-fact',
    templateUrl: './random-fact.component.html',
    styleUrls: ['./random-fact.component.scss']
})
export class RandomFactComponent implements OnInit {
    data: RandomFact | undefined;
    factsList: string[] = [];
    constructor(private service: GameService) {}

    ngOnInit(): void {
        //this.getRandomFact();
    }

    getRandomFact() {
        this.service.getRandomFact().subscribe({
            next: (res) => {
                if (res) {
                    this.data = res.data;
                    if (this.data?.fact) {
                        this.factsList = this.data.fact
                            .replace(/\[|\]/g, '') // Remove brackets
                            .split('", "') // Split by the delimiter
                            .map(fact => fact.replace(/["]/g, '').trim()) // Remove extra quotes and trim spaces
                            .filter(fact => fact.length > 0); // Remove empty entries
                    }
                } else {
                    console.error("No data received from API.");
                }
            },
            error: (err) => {
                console.error("Error fetching random fact:", err);
            }
        });
    }
}
