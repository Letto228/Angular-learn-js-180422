import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
// OnInit,
// DoCheck,
// AfterContentChecked,
// AfterContentInit,
// AfterViewChecked,
// AfterViewInit,
// OnDestroy
export class SidenavComponent implements OnChanges {
	@Input() opened = true;
	@Input() navListTemplate!: TemplateRef<unknown>;
	@Output() openedChange = new EventEmitter<boolean>();

	onToggleSidenav() {
		this.openedChange.emit(!this.opened);
	}

	ngOnChanges({ navListTemplate }: SimpleChanges): void {
		// navListTemplate.currentValue === this.navListTemplate;
		if (navListTemplate) {
			this.viewNavListTemplate();
		}
	}

	private viewNavListTemplate() {
		// view this.navListTemplate
	}

	// ngOnInit(): void {}

	// ngDoCheck(): void {}

	// ngAfterContentChecked(): void {}

	// ngAfterContentInit(): void {}

	// ngAfterViewChecked(): void {}

	// ngAfterViewInit(): void {}

	// ngOnDestroy(): void {}
}
