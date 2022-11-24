import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (
      localStorage.getItem('localUser') == null ||
      localStorage.getItem('localUser') == undefined
    ) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
