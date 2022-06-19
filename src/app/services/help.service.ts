import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(
    private http: HttpClient
  ) { }

  calculate(a: number, b: number): number {
    return a + b;
  }

  getUser() {
    return this.http.get('https://api.agify.io?name=bella');
  }
}
