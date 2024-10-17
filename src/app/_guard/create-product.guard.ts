import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Certifique-se de que o caminho está correto
import { Router } from '@angular/router';

export const createProductGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  if (!token) {
    router.navigate(['/']);
    return false;
  }

  const credentials = authService.getCredentials()

  if (credentials && !credentials.isClient) {
    return true
  }

  router.navigate(['/']);
  return false;
};
