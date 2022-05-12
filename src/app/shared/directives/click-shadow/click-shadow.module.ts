import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickShadowDirective } from './click-shadow.directive';

@NgModule({
	declarations: [ClickShadowDirective],
	imports: [CommonModule],
	exports: [ClickShadowDirective],
})
export class ClickShadowModule {}
