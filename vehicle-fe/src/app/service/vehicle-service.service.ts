import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(
    private http: HttpClient
  ) { }
  addVehicle(obj) {
    let header = new Headers;
    header.append("Content-Type", "application/json");
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.post(environment.baseURL + "addVehicle", obj);
  }
  getVehicle() {
    let header = new Headers;
    header.append("Content-Type", "application/json");
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get(environment.baseURL + "vehicles");
  }
  deleteVehicle(id) {
    let header = new Headers;
    header.append("Content-Type", "application/json");
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.delete(environment.baseURL + "vehicle/" + id);
  }
  editVehicle(id, obj) {
    let header = new Headers;
    header.append("Content-Type", "application/json");
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.put(environment.baseURL + "vehicle/" + id, obj);
  }
  getVehicleById(id) {
    let header = new Headers;
    header.append("Content-Type", "application/json");
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get(environment.baseURL + "vehicleById/" + id);
  }
}
