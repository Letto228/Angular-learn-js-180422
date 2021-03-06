import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isStringValidator(control: AbstractControl): ValidationErrors | null {
	return Number(control.value) ? { isString: 'is not string' } : null;
}
