import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsStringAsyncDirective } from './is-string-async.directive';

@NgModule({
	declarations: [IsStringAsyncDirective],
	imports: [CommonModule],
	exports: [IsStringAsyncDirective],
})
export class IsStringAsyncModule {}
