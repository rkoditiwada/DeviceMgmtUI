import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDevicesComponent } from './view-devices/view-devices.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { RegisteredDevicesComponent } from './registered-devices/registered-devices.component';


const routes: Routes = [
  {path: '', component: ViewDevicesComponent},
  {path: 'register', component: RegisterDeviceComponent} ,
  {path: 'registered', component: RegisteredDevicesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
