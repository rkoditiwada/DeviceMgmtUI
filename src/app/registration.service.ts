import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private http : HttpClient) { }

  addNewDevice(device) {
    console.log("device name" + device.deviceName);
    console.log("device desc" + device.type);
    console.log("device type" + device.description);
    return this.http.post("/users/100/register",device);
  }

  getAllDevices(userId){
    console.log("get devices")
    return this.http.get("/users/100");
  }

  deleteDevice(userId,deviceId){
    return this.http.delete("/users/100/1");

  }
}
