import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { File } from 'app/shared/models/file';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private httpClient: HttpClient) { }

  getFileByPin(pin: string) {
    const url = `${environment.BACKEND_URL}/files/get?code=${pin}`

    return this.httpClient.get<File>(url).pipe(
      catchError(err => this.handlerError(err))
    );
  }

  upload(formData: FormData, pin: string) {
    const url = `${environment.BACKEND_URL}/files/create?code=${pin}`;

    return this.httpClient.post<any>(url, formData).pipe(
      catchError(err => this.handlerError(err))
    );
  }

  handlerError(err) {
    return throwError((err && err.error && err.error.message) || "Server is currently down")
  }
}
