import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CityFormComponent } from './pages/city-form/city-form.component';

const routes: Routes = [
  { path: '', component: SearcherComponent },
  { path: 'my-cities', component: ProfileComponent },
  { path: 'city-form', component: CityFormComponent },
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
