import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: AppComponent },
  { path: 'login', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
