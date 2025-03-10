import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-world-time',
  templateUrl: './worldtime.component.html',
  styleUrls: ['./worldtime.component.scss']
})
export class WorldTimeComponent implements OnInit {
  cities = ['America/New_York', 'Europe/London', 'Australia/Sydney'];
  times: any[] = [];
  searchCity: string = '';
  suggestedCities: string[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTimes(); // Fetch only once
  }

  fetchTimes() {
    this.isLoading = true;
    this.times = [];
    this.cities.forEach(city => {
      this.http.get<any>(`https://www.timeapi.io/api/Time/current/zone?timeZone=${city}`).subscribe(
        response => {
          this.times.push({
            city: city.split('/')[1], 
            datetime: `${response.date} ${response.time}`,
            seconds: response.seconds
          });
          this.isLoading = false;
        },
        error => {
          console.error(`Error fetching time for ${city}`, error);
          this.isLoading = false;
        }
      );
    });
  }
  

  onSearch() {
    if (this.searchCity.length > 2) {
      this.http.get<string[]>(`https://www.timeapi.io/api/TimeZone/AvailableTimeZones`).subscribe(data => {
        this.suggestedCities = data.filter(city => city.toLowerCase().includes(this.searchCity.toLowerCase()));
      });
    } else {
      this.suggestedCities = [];
    }
  }

  selectCity(city: string) {
    this.cities = [city]; // Show only the selected city
    this.fetchTimes();
    this.suggestedCities = [];
    this.searchCity = '';
  }
}
