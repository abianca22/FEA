import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UserpageComponent } from './userpage/userpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'offices', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'allUsers', component: UserpageComponent, canActivate: [AuthGuard]},
  { path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  TestComponent,
  UserpageComponent,
  PageNotFoundComponent,
  UserProfileComponent,
  SignupComponent,
  LoginComponent,
];
