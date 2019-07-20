import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DeviceDetectorModule
  ],
  exports: [
    MainComponent
  ]
})
export class HomeModule { }
