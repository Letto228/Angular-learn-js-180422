import { ChangeDetectorRef, Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable, of, tap, timer } from 'rxjs';

@Directive({
	selector: '[appIsStringAsync]',
	providers: [
		{
			provide: NG_ASYNC_VALIDATORS,
			multi: true,
			useExisting: IsStringAsyncDirective,
		},
	],
})
export class IsStringAsyncDirective implements AsyncValidator {
	constructor(private cd: ChangeDetectorRef) {}

	validate(control: AbstractControl): Observable<ValidationErrors | null> {
		// const errors$: Observable<ValidationErrors | null> = Number(control.value)
		//   ? timer(2000).pipe(map(() => ({isString: 'is not string'})))
		//   : of(null);

		// return errors$.pipe(
		//   tap(() => {
		//     this.cd.markForCheck();
		//   })
		// )
		return timer(3000).pipe(
			map(() => (Number(control.value) ? { isString: 'is not string' } : null)),
			tap(() => {
				this.cd.markForCheck();
			}),
		);
	}
}
