import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class MapResponceInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			map((responce) => {
				if (responce instanceof HttpResponse) {
					return responce.clone({
						body: responce.body.data,
					});
				}

				return responce;
			}),
		);
	}
}
