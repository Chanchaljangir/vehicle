import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewVehicleComponent } from './vehicle/view-vehicle/view-vehicle.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './vehicle/edit-vehicle/edit-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleServiceService } from './service/vehicle-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ViewVehicleComponent,
    AddVehicleComponent,
    EditVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VehicleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
