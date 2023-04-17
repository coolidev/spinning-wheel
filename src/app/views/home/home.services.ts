import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = 'https://random-data-api.com/api/v2/';
  private spinData: any;

  constructor(private http: HttpClient) {
    this.setSpinData();
  }

  getSpinData() {
    return this.spinData;
  }

  setSpinData() {
    const types = 'users'
    this.http.get(this.baseUrl + types, { params: { size: 20, response_type: 'json' } }).subscribe((data) => {
      this.spinData = Object.values(data).map((value) => {
        return {
          image: value.avatar,
          name: value.username
        }
      })
    })
  }
}
