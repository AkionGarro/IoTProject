import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private BASE_URL = 'http://localhost:5000/';
  constructor(private client: HttpClient) {}

  getUserLogin(user: any): Observable<any> {
    return this.client.post(this.BASE_URL + 'login', user);
  }
  registerUser(user: any): Observable<any> {
    return this.client.post(this.BASE_URL + 'register', user);
  }

  addDevice(device: any): Observable<any> {
    return this.client.post(this.BASE_URL + 'addDevice', device);
  }
  getUserDevices(user: any): Observable<any> {
    return this.client.post(this.BASE_URL + 'getUserDevices', user);
  }

  getDeviceById(id: any): Observable<any> {
    return this.client.post(this.BASE_URL + 'getDeviceById', id);
  }
}
