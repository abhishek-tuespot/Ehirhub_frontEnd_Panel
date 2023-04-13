import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import baseUrl from "../../service/url-helper";



export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session

// live url http://pcstart.in/authenticate

  authenticate(username:any, password:any) {
    return this.httpClient
      .post<any>(`${baseUrl}/auth/signin`, { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("roles" , userData.roles);
          sessionStorage.setItem("id",userData.id);
          let tokenStr = "Bearer " + userData.accessToken;
          sessionStorage.setItem("token", tokenStr);

          console.log("line no:32 "+userData);
          
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
