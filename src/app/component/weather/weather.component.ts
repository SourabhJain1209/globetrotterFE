import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  apiKey: string = '7fb393a8be2bf6afd36b66e51f6f86ce';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  city: string = '';
  weather: any = null;
  error: string = '';
  loading: boolean = false;

  private searchSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(800), distinctUntilChanged()).subscribe((city) => {
      this.fetchWeather(city);
    });
  }

  onSearchChange(): void {
    this.searchSubject.next(this.city);
  }

  fetchWeather(city: string): void {
    if (!city) {
      this.weather = null;
      this.error = '';
      return;
    }

    this.loading = true;
    this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`).subscribe(
      (response: any) => {
        this.weather = {
          city: response.name,
          country: response.sys.country,
          temperature: response.main.temp,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`
        };
        this.error = '';
      },
      (error) => {
        this.weather = null;
        this.error = error.status === 404 ? 'City not found.' : 'Failed to fetch data.';
      }
    ).add(() => {
      this.loading = false;
    });
  }
}
