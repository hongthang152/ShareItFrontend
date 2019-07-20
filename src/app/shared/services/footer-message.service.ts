import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterMessageService {
  constructor() { }
  private message = new BehaviorSubject(['',0]);

  showErrorMessage(message: string, timeout: number) {
    this.message.next([message, timeout, Status.Error]);
  }

  showSuccessMessage(message: string, timeout: number) {
    this.message.next([message, timeout, Status.Success]);
  }

  onShowMessage(): Observable<(string | number | Status)[]> {
    return this.message.asObservable();
  }
}

export enum Status {
  Error,
  Success
}
