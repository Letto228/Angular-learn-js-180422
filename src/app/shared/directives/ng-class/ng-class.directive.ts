import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appNgClass]',
})
export class NgClassDirective implements OnChanges {
	@Input() appNgClass: Record<string, unknown> = {}; //{[key: string]: boolean}

	private element!: HTMLElement;

	constructor(private elementRef: ElementRef) {
		this.element = this.elementRef.nativeElement;
	}

	ngOnChanges({ appNgClass }: SimpleChanges) {
		const prevValue: Record<string, unknown> = appNgClass.previousValue;

		Object.entries(this.appNgClass)
			.filter(([className, isActive]) => (prevValue ? prevValue[className] !== isActive : isActive))
			.forEach(([className, isActive]) => {
				this.toggleClass(className, isActive);
			});
	}

	private toggleClass(className: string, isActive: unknown) {
		if (isActive) {
			this.element.classList.add(className);

			return;
		}

		this.element.classList.remove(className);
	}
}
