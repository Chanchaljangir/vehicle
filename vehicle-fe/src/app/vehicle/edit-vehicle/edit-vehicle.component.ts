import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleServiceService } from 'src/app/service/vehicle-service.service';
@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
  vehicleForm: FormGroup;
  paramsId: any;
  VehicleData: any;

  constructor(private fb: FormBuilder, private vehicleService: VehicleServiceService,
    private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.paramsId = params['id'];
    })
    this.vehicleInitForm();
    this.patchVehicles();
  }

  vehicleInitForm() {
    this.vehicleForm = this.fb.group({
      year: ["", Validators.required],
      make: ["", Validators.required],
      model: ["", Validators.required],
    })
  }
  patchVehicles() {
    this.vehicleService.getVehicleById(this.paramsId).subscribe((res: any) => {
      if (res.IsSuccess) {
        let data = res.Data
        this.vehicleForm.patchValue({
          year: data.year,
          make: data.make,
          model: data.model,
        })
      } else {
        console.log("error")
      }
    })
  }
  onSubmit(data) {
    console.log("data", data);

    if (this.vehicleForm.valid) {
      this.vehicleService.editVehicle(this.paramsId, data).subscribe((data: any) => {
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

