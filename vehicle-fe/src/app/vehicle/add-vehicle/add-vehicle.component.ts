import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleServiceService } from 'src/app/service/vehicle-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder,private vehicleService: VehicleServiceService,private router: Router,) { }

  ngOnInit() {
    this.vehicleInitForm();
  }
  vehicleInitForm() {
    this.vehicleForm = this.fb.group({
      year: ["", Validators.required],
      make: ["", Validators.required],
      model: ["", Validators.required],
    })
  }
  onSubmit(data){
    console.log("data", data);

    if (this.vehicleForm.valid) {
      this.vehicleService.addVehicle(data).subscribe((data: any) => {
        if (data.IsSuccess) {
          console.log(data.Data)
          this.router.navigate(['/viewVehicle'])
        } else {
          console.log("error")
        }
      })
    } else {
      // this.ts.pop("error", "", "enter all require(*) fields");
    }
  }
}
