import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './modules/shared/components/page-not-found/page-not-found.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  { path: 'find-places', component: MainComponent },
  { path: '', pathMatch: 'full', redirectTo: 'find-places' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
