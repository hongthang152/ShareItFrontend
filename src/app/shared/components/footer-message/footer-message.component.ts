import { Component, OnInit, Input } from '@angular/core';
import { FooterMessageService, Status } from 'app/shared/services/footer-message.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-footer-message',
  templateUrl: './footer-message.component.html',
  styleUrls: ['./footer-message.component.scss']
})
export class FooterMessageComponent implements OnInit { 
  constructor(private footerMessageService: FooterMessageService) { }
  
  Status = Status;
  text: string = '';
  isVisible: boolean = false;
  status: Status = Status.Error;

  ngOnInit() {
    this.footerMessageService.onShowMessage()
      .pipe(
        filter(data => data[0] && data[1] && data[2] != null && data[1] > 0)
      )
      .subscribe(
        data => {
          this.text = <string>data[0];
          this.isVisible = true;
          this.status = <Status>data[2];
          setTimeout(() => this.isVisible = false, <number>data[1])
        }
    )
  }

}
