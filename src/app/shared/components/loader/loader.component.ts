import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  constructor(
    private loaderService: LoaderService
  ) { }
  
  isVisible: boolean = false;
  ngOnInit() {
    this.loaderService.onLoaderChange().subscribe(
      isVisible => this.isVisible = isVisible
    )
  }

}
