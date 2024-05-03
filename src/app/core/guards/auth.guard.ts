import { Inject } from "@angular/core"
import { UserService } from "../services/user.service"
import { Router } from "@angular/router"

export const authGuard = () => {

    const userService = Inject(UserService)
    const router = Inject(Router);
  
    if(userService.estaLogado()) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  }
  