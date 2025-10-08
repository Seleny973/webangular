import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user-service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  private userService = inject(UserService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.userService.isAdmin()) return true;
    // redirect to login or home
    this.router.navigate(['/login']);
    return false;
  }
}
