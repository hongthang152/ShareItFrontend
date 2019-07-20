import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor() { }
  private loader = new BehaviorSubject(false);

  showLoader() {
    this.loader.next(true);
  }

  hideLoader() {
    this.loader.next(false);
  }

  onLoaderChange() {
    return this.loader.asObservable();
  }

}
