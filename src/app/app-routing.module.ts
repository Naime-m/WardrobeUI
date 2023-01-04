import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarmentsEditComponent } from './garments-edit/garments-edit.component';
import { GarmentsComponent } from './garments/garments.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'index'},
  {path: 'index', component: GarmentsComponent},
  {path: 'edit/:id', component:GarmentsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
