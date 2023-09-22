import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//571A7A065E08BD7672E1BD9EF499B34D3985A36CB86B54D1E91620F5513B3B77579FB0AF655CBC120D6B25AB3D004F50
@Injectable({
  providedIn: 'root',
})
export class SenderEmailService {
  private url = 'smtp.elasticemail.com:2525';
  constructor(private http: HttpClient) {}

  SendEmail(body: any) {
    return this.http.post(this.url, body);
  }
}
