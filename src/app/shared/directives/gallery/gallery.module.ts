import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryDirective } from './gallery.directive';

@NgModule({
	declarations: [GalleryDirective],
	imports: [CommonModule],
	exports: [GalleryDirective],
})
export class GalleryModule {}
