import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficeComponent } from './office/office.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OfficeComponent,
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
