import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BackendApiService } from "../../services/backend-api.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  username: string;
  user: any = [];
  repo: any = [];
  repoPresent: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public restApi: BackendApiService
  ) {
    console.log(route.snapshot.params);
    this.username = route.snapshot.params["username"];
  }

  ngOnInit() {
    this.restApi.getUser(this.username).subscribe((data: {}) => {
      this.user = data;
    });
    this.restApi.getRepo(this.username).subscribe((data: []) => {
      //console.log(data.length);
      if (data.length > 0) {
        this.repo = data;
        this.repoPresent = true;
      }
    });
  }
}
