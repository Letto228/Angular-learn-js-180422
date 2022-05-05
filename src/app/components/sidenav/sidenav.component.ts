import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	OnInit,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	// @Input() text: string = '';

	@ViewChild('navListContainer', {
		read: ViewContainerRef,
		static: true,
	})
	private navListContainer!: ViewContainerRef;
	@ViewChild(MatDrawer, { static: true })
	private matDrawer!: MatDrawer;

	@ContentChild('navList', { static: true })
	private navListTemplate!: TemplateRef<unknown>;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	// private _counter = 1;

	// get counter(): number {
	// 	console.log('CD SidenavComponent', this.text);

	// 	return this._counter;
	// }

	// isDrawerView = true;

	onToggleSidenav() {
		this.matDrawer.toggle();
		this.changeDetectorRef.markForCheck();
	}

	// log() {}

	ngOnInit() {
		// this.changeDetectorRef.detach();

		// setInterval(() => {
		// 	this._counter += 1;
		// }, 500);

		// setTimeout(() => {
		// 	this.changeDetectorRef.detectChanges();
		// }, 3000);

		// setTimeout(() => {
		// 	this.changeDetectorRef.reattach();
		// }, 6000);

		this.viewNavListTemplate();
	}

	private viewNavListTemplate() {
		this.navListContainer.createEmbeddedView(this.navListTemplate);
	}
}
