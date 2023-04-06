import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: async () => (await import('@demoo/front/auth')).AuthComponent
  },
  {
    path: 'hi',
    loadComponent: async () => (await import('@demoo/front/home')).HomeComponent
  },
  {
    path: 'me',
    loadComponent: async () => (await import('@demoo/front/profile')).ProfileComponent
  },
  {
    path: '**',
    loadComponent: async () => (await import('@demoo/front/not-found')).NotFoundComponent
  }
];
