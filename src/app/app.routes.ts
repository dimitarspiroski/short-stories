import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/pages/home/home.component').then((component) => component.HomeComponent),
  },
  {
    path: 'stories',
    loadComponent: () =>
      import('./features/pages/stories/stories/stories.component').then(
        (component) => component.StoriesComponent
      ),
  },
  {
    path: 'stories/:id',
    loadComponent: () =>
      import('./features/pages/stories/story/story.component').then(
        (component) => component.StoryComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/pages/about/about.component').then(
        (component) => component.AboutComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/pages/contact/contact.component').then(
        (component) => component.ContactComponent
      ),
  },
];
