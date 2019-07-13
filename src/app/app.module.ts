import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDevicesComponent } from './view-devices/view-devices.component';
import { from } from 'rxjs';
import { MatLineModule } from '@angular/material/core';
import { MatListModule } from "@angular/material/list";
import { RegisteredDevicesComponent } from './registered-devices/registered-devices.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    ViewDevicesComponent,
    RegisteredDevicesComponent,
    RegisterDeviceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatLineModule,
    MatListModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
