import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DeviceModel} from "./device.model";
import { Observable } from 'rxjs';

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
    var data = {
      "deviceName": device.deviceName,
      "description": device.type,
      "type": device.description,
      "userId": "test",
      "status": "test",
      "createdBy": "sudhanshu",
      "createdDate": null,
      "modifiedBy": "sudhanshu",
      "modifiedDate": null
  };
  console.log("inside post");
    return this.http.post("http://localhost:9999/deviceMgmt/addDevice",data, {responseType: 'text'}).subscribe(data => console.log("success",
    err => console.log("error", err),
    () => console.log("completed succesfully")));
  }

  getAllDevices(userId): Observable<DeviceModel[]>{
    console.log("get devices")
    return this.http.get<DeviceModel[]>("http://localhost:9999/deviceMgmt/api/devices");
  }

  deleteDevice(userId,deviceId){
    return this.http.delete("http://localhost:9999/");

  }
}
