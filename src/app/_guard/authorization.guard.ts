import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

export const authorizationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isLoggedIn()) {
    const role = authService.getRole()
    const restrictedRoutes = ['product-create', 'view-products-supplier', 'received-bids', 'update-product', 'update-product/:id']

    if (role === 'CUSTOMER' && restrictedRoutes.includes(route.routeConfig?.path || '')) {
      router.navigate(['/'])
      return false
    }

    return true
  } else {
    authService.logout()
    return false
  }
};
