import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  constructor(private regService : RegistrationService) { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    console.log("Entered Email id : " + data.deviceName);
    this.regService.addNewDevice(data);
    this.regService.getAllDevices(100);
    this.regService.deleteDevice(100,1);
 }

}
