import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const loginType = authService.getRole()

  if (route.routeConfig?.path === 'received-bids' && loginType == 'SUPPLIER') {
    return true
  } else if (route.routeConfig?.path === 'submitted-bids' && loginType == 'CUSTOMER') {
    return true
  } else {
    router.navigate(['/'])
    return false
  }
};
