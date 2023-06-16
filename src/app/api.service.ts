import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
@Injectable()
export class ApiService {
    private apiUrl = 'http://localhost:8001'; 

constructor(private http: HttpClient) { }
/**
 * This function sends a POST request to the server with login data (email and password) and returns an
 * Observable.
 * @param {string} username - A string representing the user's email address used for login
 * authentication.
 * @param {string} password - The password parameter is a string that represents the user's password.
 * It is used as part of the login process to authenticate the user's identity.
 * @returns An Observable of type `any` is being returned. The Observable is created by making a POST
 * request to the API endpoint `/login` with the login data (email and password) as the request body.
 * The response from the server is of type `any`.
 */
login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  validateTokenAndGetRole(token: string): string {
    try {
      // Decode the token to extract the user's role
      const decodedToken: any = jwt_decode(token);
      const userRole: string = decodedToken.role;

      return userRole;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
