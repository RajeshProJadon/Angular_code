import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../../node_modules/@angular/router';

export interface CanComponentDeactivate {
    canDeactvate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(  component: CanComponentDeactivate,
                    currentRoute: ActivatedRouteSnapshot,
                    currentState: RouterStateSnapshot,
                    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |
                    boolean {
                    return component.canDeactvate();
                    }

}
