import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appClickShadow]',
})
export class ClickShadowDirective {
	@HostListener('click')
	onClick() {
		this.isBoxShadowActive = !this.isBoxShadowActive;
	}

	@HostBinding('style.boxShadow')
	private get boxShadow(): string {
		return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
	}

	private isBoxShadowActive: boolean = false;
}
