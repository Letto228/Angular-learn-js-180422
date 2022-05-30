import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsStringDirective } from './is-string.directive';

@NgModule({
	declarations: [IsStringDirective],
	imports: [CommonModule],
	exports: [IsStringDirective],
})
export class IsStringModule {}
