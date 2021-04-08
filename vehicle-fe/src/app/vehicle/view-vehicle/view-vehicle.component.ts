import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleServiceService } from 'src/app/service/vehicle-service.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {
  VehicleData = [];

  constructor(private vehicleService: VehicleServiceService, private router: Router) { }

  ngOnInit() {
    this.getVehicles();
  }
  getVehicles() {
    this.vehicleService.getVehicle().subscribe((data: any) => {
      if (data.IsSuccess) {
        this.VehicleData = data.Data
        this.router.navigate(['/viewVehicle'])
      } else {
        console.log("error")
      }
    })
  }
  deleteVehicle(id) {
    this.vehicleService.deleteVehicle(id).subscribe((data: any) => {
      if (data.IsSuccess) {
        this.VehicleData = data.Data
        this.router.navigate(['/viewVehicle'])
      } else {
        console.log("error")
      }
    })
  }
}
