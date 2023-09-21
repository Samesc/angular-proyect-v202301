import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenderEmailService {
  private url = '';
  constructor(private http: HttpClient) {}

  SendEmail(body: any) {
    return this.http.post(this.url, body);
  }
}
