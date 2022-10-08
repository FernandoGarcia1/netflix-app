import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/utils/constants.class';


@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let newParams= new HttpParams({
      fromString: request.params.toString()
    });
    newParams = newParams.set('api_key', Constants.API_KEY).set('language', Constants.LANGUAGE);

    const REQUEST_CLONE = request.clone({
      params: newParams
    });

    return next.handle(REQUEST_CLONE);
  }
}
