import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'car', component: CarComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'car/:id', component: CarComponent },
  { path: 'car-list/:id', component: CarListComponent },
  { path: 'empty', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
