import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './vehicle/edit-vehicle/edit-vehicle.component';
import { ViewVehicleComponent } from './vehicle/view-vehicle/view-vehicle.component';


const routes: Routes = [
  { path: '', component: ViewVehicleComponent },
  { path: 'addVehicle', component: AddVehicleComponent },
  { path: 'viewVehicle', component: ViewVehicleComponent },
  { path: 'editVehicle/:id', component: EditVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
