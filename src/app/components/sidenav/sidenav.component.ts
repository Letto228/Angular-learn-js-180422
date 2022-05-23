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
	providers: [
		// {
		// 	provide: COMPONENT_NAME_TOKEN,
		// 	useValue: 'SidenavComponent',
		// }
	],
})
export class SidenavComponent {
	@ViewChild(MatDrawer, { static: true })
	private matDrawer!: MatDrawer;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	onToggleSidenav() {
		this.matDrawer.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
