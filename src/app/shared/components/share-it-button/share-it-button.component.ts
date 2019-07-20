import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-share-it-button',
  templateUrl: './share-it-button.component.html',
  styleUrls: ['./share-it-button.component.scss']
})
export class ShareItButtonComponent implements OnInit {

  @Output()
  onClick: any = new EventEmitter();
  isDisabled: boolean;

  @Input()
  set disabled(value: boolean) {
    this.isDisabled = String(value) == 'true'
  }
  constructor() { }

  ngOnInit() {
  }

}
