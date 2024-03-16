import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'convocatoria',
    loadComponent: () => import('./pages/announcement/announcement.component')
  },
  {
    path: 'inscripcion',
    loadComponent: () => import('./pages/enrollment/enrollment.component')
  },
  {
    path: 'programa',
    loadComponent: () => import('./pages/schedule/schedule.component')
  },
  {
    path: 'expositores',
    loadComponent: () => import('./pages/speakers/speakers.component')
  },
  {
    path: 'organizadores',
    loadComponent: () => import('./pages/organizers/organizers.component')
  },
  {
    path: 'archivo',
    loadComponent: () => import('./pages/archive/archive.component')
  },
  { path: '**', redirectTo: 'inicio' },
];
