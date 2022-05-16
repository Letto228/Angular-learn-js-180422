import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

interface IGalleryContext<T> {
	$implicit: T;
	index: number;
	next: () => void;
	back: () => void;
	setIndex: (index: number) => void;
}

@Directive({
	selector: '[appGallery]',
})
export class GalleryDirective<T> implements OnInit {
	@Input() appGalleryFrom!: T[];

	private readonly activeIndex$ = new BehaviorSubject<number>(0);

	constructor(private template: TemplateRef<IGalleryContext<T>>, private viewContainer: ViewContainerRef) {}

	ngOnInit() {
		this.listenActiveIndexChange();
	}

	private listenActiveIndexChange() {
		this.activeIndex$
			.pipe(
				//create context
				map((activeIndex) => this.generateContext(activeIndex)),
			)
			.subscribe((context) => {
				//add template with context
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			});
	}

	private generateContext(activeIndex: number): IGalleryContext<T> {
		return {
			$implicit: this.appGalleryFrom[activeIndex],
			index: activeIndex,
			next: () => {
				this.next();
			},
			back: () => {
				this.back();
			},
			setIndex: (index: number) => {
				this.setIndex(index);
			},
		};
	}

	private next() {
		const nextIndex = this.activeIndex$.value + 1;
		const itemsLen = this.appGalleryFrom.length;

		if (nextIndex < itemsLen) {
			this.activeIndex$.next(nextIndex);

			return;
		}

		this.activeIndex$.next(0);
	}

	private back() {
		const prevIndex = this.activeIndex$.value - 1;
		const itemsLen = this.appGalleryFrom.length;

		if (prevIndex >= 0) {
			this.activeIndex$.next(prevIndex);

			return;
		}

		this.activeIndex$.next(itemsLen - 1);
	}

	private setIndex(index: number) {
		this.activeIndex$.next(index);
	}
}

// Subject = Observable + Subscriber
