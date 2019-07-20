import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Output()
  public onFileSelect: any = new EventEmitter();
  @Input()
  label: string = 'Choose a file ...';

  constructor() { }

  ngOnInit() {}

}
