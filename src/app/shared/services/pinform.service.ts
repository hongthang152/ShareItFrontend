import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skip, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PinformService {
  constructor() { }

  private shake = new BehaviorSubject(false);

  shakeInput() {
    this.shake.next(true);
  }

  onShake() {
    return this.shake.asObservable().pipe(
      filter(data => data)
    );
  }
}
