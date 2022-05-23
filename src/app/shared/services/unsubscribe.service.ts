import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UnsubscribeService implements OnDestroy {
	private _unsuscribe$ = new Subject<void>();

	get unsuscribe$(): Observable<void> {
		return this._unsuscribe$.asObservable();
	}

	ngOnDestroy(): void {
		this._unsuscribe$.next();
		this._unsuscribe$.complete();
	}
}
