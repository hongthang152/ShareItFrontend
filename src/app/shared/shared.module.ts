import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareItButtonComponent } from './components/share-it-button/share-it-button.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { GetItButtonComponent } from './components/get-it-button/get-it-button.component';
import { PinFormComponent } from './components/pin-form/pin-form.component';

@NgModule({
  declarations: [
    ShareItButtonComponent,
    FileInputComponent,
    GetItButtonComponent,
    PinFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShareItButtonComponent,
    FileInputComponent,
    GetItButtonComponent,
    PinFormComponent
  ]
})
export class SharedModule { }
