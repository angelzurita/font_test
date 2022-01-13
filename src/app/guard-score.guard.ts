import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { userService } from "./services/user";

@Injectable({
  providedIn: 'root'
})
export class GuardScoreGuard implements CanActivate {

  users: any = [];

  constructor(private router: Router, userService: userService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

    const hora = new Date().getHours();
    let id = route.params['id'];
    let score = route.params['score'];

    if (score >= 30) {
      return true;
    } else {
      alert("El no se puede mostrar el perfil del usuario " + '"'+ id + '"' + " porque no tiene mas de 30 puntos");
      return false;
    }

  }
}
