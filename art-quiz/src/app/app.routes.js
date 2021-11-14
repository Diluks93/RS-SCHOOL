import { categoriesPageComponent } from './pages/categories-page.component';
import { homePageComponent } from './pages/home-page.component';
import { notFound } from './common/not-found.component';

export const appRoutes = [
  { path: '', component: homePageComponent },
  { path: 'categories', component: categoriesPageComponent },
  { path: '**', component: notFound }
]