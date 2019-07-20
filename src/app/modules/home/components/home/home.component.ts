import { Component, OnInit } from '@angular/core';
import { FileService } from 'app/shared/services/file.service';
import { FooterMessageService } from 'app/shared/services/footer-message.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { PinformService } from 'app/shared/services/pinform.service';
import { finalize } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private footerMessageService: FooterMessageService,
    private loaderService: LoaderService,
    private pinformService: PinformService,
    private fileService: FileService,
    private deviceService: DeviceDetectorService) { }

  ngOnInit() {
  }

  file: any;
  showErrorMsg: boolean;
  pin: string;

  get file_label() {
    if(this.file) {
      return this.file.name.length > 12 ? this.file.name.substring(0,12).concat('...') 
      : this.file.name;
    }
    return 'Choose a file ...';
  }
  
  getFile() {
    if(!this.pin) {
      this.pinformService.shakeInput();
      this.footerMessageService.showErrorMessage(
        "Please enter your file PIN",
        3000
      )
      return 
    }

    this.loaderService.showLoader();
    this.fileService.getFileByPin(this.pin)
    .pipe(
      finalize(() => this.loaderService.hideLoader())
    )
    .subscribe(
      file => window.open(file.url),
      (err) => {
        this.footerMessageService.showErrorMessage(
          err,
          3000
        )
        this.pinformService.shakeInput();
      } 
    );
  }

  
  upload() {
    if (!this.file || !this.pin) {
      let errorMsg = !this.file ?
       "Please upload your file" : "Please enter your file PIN before upload your file";
      this.footerMessageService.showErrorMessage(
        errorMsg,
        3000
      )
      this.pinformService.shakeInput();
      return;
    }

    if(this.file.size > environment.MAX_FILE_SIZE) {
      this.footerMessageService.showErrorMessage(
        "Your file size has exceeded our upload limit of 10MB",
        3000
      )
      return;
    }

    this.loaderService.showLoader();
    let formData = new FormData();
    formData.append('file', this.file)

    this.fileService.upload(formData, this.pin)
      .pipe(
        finalize(() => this.loaderService.hideLoader())
      )
      .subscribe(() => {
        let message = this.deviceService.isMobile() ? `Your file has been uploaded with this PIN: ${this.pin}` :  `Your file has been uploaded with this PIN number: ${this.pin}. Please be aware that your file will be removed within 1 week.`
        this.footerMessageService.showSuccessMessage(message,10000)
      }, 
      err => this.footerMessageService.showErrorMessage(
        err,
        4000
      ))
  }
}
