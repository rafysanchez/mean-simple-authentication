import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURI = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.apiURI + '/tasks');
  }

  getUsers() {
    return this.http.get(this.apiURI +' /users');
  }

  getSpecialTasks() {
    return this.http.get(this.apiURI + '/tasks/special');
  }

}
