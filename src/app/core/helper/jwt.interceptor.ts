import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authentication: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const JWT_TOKEN = this.authentication.getAccessToken();
        if (JWT_TOKEN) {
            request = request.clone({
                setHeaders: {
                    Authorization: `JWT ${JWT_TOKEN}`
                }
            });
        }

        return next.handle(request);
    }
}
