import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-it-button',
  templateUrl: './get-it-button.component.html',
  styleUrls: ['./get-it-button.component.scss']
})
export class GetItButtonComponent implements OnInit {
  constructor() { }

  @Output()
  onClick = new EventEmitter();
  
  ngOnInit() {
  }

}
