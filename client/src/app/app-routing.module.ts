import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@/common/guards/auth.guard';
import { NonAuthGuard } from '@/common/guards/non-auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: './pages/main/main.module#MainModule' },
  { path: 'login', canActivate: [NonAuthGuard], loadChildren: './pages/auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
