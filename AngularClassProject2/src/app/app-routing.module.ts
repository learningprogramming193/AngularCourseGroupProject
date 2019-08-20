import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'search', component: SearchComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddComponent, HomeComponent, SearchComponent, AppComponent];
