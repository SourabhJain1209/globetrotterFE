import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8">🌍 Globetrotter Challenge</h1>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  constructor() {}
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));