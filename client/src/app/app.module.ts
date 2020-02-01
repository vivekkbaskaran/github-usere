import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/user/user.component";
import { RepoComponent } from "./components/repo/repo.component";
import { BackendApiService } from "./services/backend-api.service";
@NgModule({
  declarations: [AppComponent, UsersComponent, UserComponent, RepoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
