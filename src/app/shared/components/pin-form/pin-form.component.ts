import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PinformService } from 'app/shared/services/pinform.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss']
})
export class PinFormComponent implements OnInit {
  constructor(private pinformService: PinformService) { }

  @Output()
  onValueChange = new EventEmitter();
  additionalClass: string = '';

  ngOnInit() {
    this.pinformService.onShake().subscribe(
      () => {
        this.additionalClass = 'pin-form-shake pin-form-error';
        setTimeout(() => this.additionalClass = 'pin-form-error', 820) 
      }
    )
  }
}
