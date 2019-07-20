import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareItButtonComponent } from './components/share-it-button/share-it-button.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { GetItButtonComponent } from './components/get-it-button/get-it-button.component';
import { PinFormComponent } from './components/pin-form/pin-form.component';
import { FooterMessageComponent } from './components/footer-message/footer-message.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    ShareItButtonComponent,
    FileInputComponent,
    GetItButtonComponent,
    PinFormComponent,
    FooterMessageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShareItButtonComponent,
    FileInputComponent,
    GetItButtonComponent,
    PinFormComponent,
    FooterMessageComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
