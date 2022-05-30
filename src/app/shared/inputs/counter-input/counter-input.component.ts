import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-counter-input',
	templateUrl: './counter-input.component.html',
	styleUrls: ['./counter-input.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: CounterInputComponent,
		},
	],
})
export class CounterInputComponent implements ControlValueAccessor {
	@Input() step: number = 1;

	counter = 0;
	isDisable = false;
	onChange!: (_counter: number) => void;
	onTouched!: () => void;

	private touch = false;

	constructor(private cd: ChangeDetectorRef) {}

	back() {
		this.counter -= this.step;

		this.onChange(this.counter);
		this.markTouch();
	}

	next() {
		this.counter += this.step;

		this.onChange(this.counter);
		this.markTouch();
	}

	writeValue(newCounter: any): void {
		this.counter = newCounter;
		this.cd.markForCheck();
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisable: boolean) {
		this.isDisable = isDisable;
		console.log(isDisable);
		this.cd.markForCheck();
	}

	private markTouch() {
		if (!this.touch) {
			this.touch = true;

			this.onTouched();
		}
	}
}
