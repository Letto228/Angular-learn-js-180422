import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
	selector: '[appIsString]',
	providers: [
		{
			provide: NG_VALIDATORS,
			multi: true,
			useExisting: IsStringDirective,
		},
	],
})
export class IsStringDirective implements Validator {
	// @Input() appIsString!: RegExp;

	validate(control: AbstractControl): ValidationErrors | null {
		return Number(control.value) ? { isString: 'is not string' } : null;
	}
}
