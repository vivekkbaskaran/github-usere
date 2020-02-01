import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BackendApiService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get("https://api.github.com/users");
  }

  getUser(username) {
    return this.http.get(
      "https://api.github.com/users/" +
        username +
        "?client_id=e2ea21dd138690e9ff60&client_secret=af9d615a922f8d8121fbe467acf6a34ce776d7ac"
    );
  }

  getRepo(username) {
    return this.http.get(
      "https://api.github.com/users/" +
        username +
        "/repos?client_id=e2ea21dd138690e9ff60&client_secret=af9d615a922f8d8121fbe467acf6a34ce776d7ac"
    );
    //https://api.github.com/users/vivek/repos?client_id=60b9f23dedffbdfc476c&client_secret=d1c186c6373f96571c0bfcf76b84e4dc6fd0c15a
  }
}
