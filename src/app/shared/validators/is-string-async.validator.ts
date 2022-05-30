import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable, tap, timer } from 'rxjs';

export function isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
	return timer(3000).pipe(
		map(() => (Number(control.value) ? { isString: 'is not string' } : null)),
		tap(() => {
			// this.cd.markForCheck();
		}),
	);
}
