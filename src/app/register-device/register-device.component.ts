import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../registration.service";

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.css']
})
export class RegisterDeviceComponent implements OnInit {

  constructor(private regService : RegistrationService) { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    console.log("Entered Email id : " + data.deviceName);
    
    this.regService.addNewDevice(data);
   // this.regService.getAllDevices(100);
    //this.regService.deleteDevice(100,1);
 }

}
