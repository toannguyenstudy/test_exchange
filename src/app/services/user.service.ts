import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    url = 'http://localhost:3000/user';
    token = '';
    interval = null;

    constructor(private http: HttpClient) {}

    register(user) {
        return this.http.post(`${this.url}/register`, user);
    }

    login(user) {
        return this.http.post(`${this.url}/login`, user);
    }
}
