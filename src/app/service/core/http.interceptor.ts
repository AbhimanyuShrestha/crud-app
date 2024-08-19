import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';


export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
   

    return next.handle(req).pipe(finalize(()=>{}))
    
  }
}
