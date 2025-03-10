import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  // {
  //   path: 'game',
  //   loadComponent: () => 
  //     import('./pages/game/game.component').then(m => m.GameComponent)
  // },
  {
    path: 'challenge/:inviteCode',
    loadComponent: () => 
      import('./pages/challenge/challenge.component').then(m => m.ChallengeComponent)
  }
];
