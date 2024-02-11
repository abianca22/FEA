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

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OfficeComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
