import { Component, OnInit } from "@angular/core";
import { BackendApiService } from "../../services/backend-api.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  userData: any = [];
  Form: FormGroup;
  submitted = false;
  constructor(
    public restApi: BackendApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.Form = this.formBuilder.group({
      userName: ["", Validators.required]
    });
    this.restApi.getData().subscribe((data: {}) => {
      this.userData = data;
    });
  }

  get f() {
    return this.Form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.Form.invalid) {
      return;
    }
    this.router.navigateByUrl("/user/" + this.Form.value.userName);
  }
}
