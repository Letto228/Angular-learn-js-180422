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

	onToggleSidenav() {
		this.matDrawer.toggle();
		this.changeDetectorRef.markForCheck();
	}

	ngOnInit() {
		this.viewNavListTemplate();
	}

	private viewNavListTemplate() {
		this.navListContainer.createEmbeddedView(this.navListTemplate);
	}
}
