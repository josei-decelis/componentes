import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApi=  environment.authApiUrl;
  constructor(private httpClient: HttpClient) {}

  login() {
    return this.httpClient.post(this.authApi,{
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    });
  }
}
