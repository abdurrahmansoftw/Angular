import { Routes } from '@angular/router';
import { CompsComponent } from './comps/comps.component';

export const routes: Routes = [
  { path: '', component: CompsComponent },
  { path: 'comps', component: CompsComponent },
];
