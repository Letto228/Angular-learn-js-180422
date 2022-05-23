import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { COMPONENT_NAME_TOKEN } from './shared/tokens/component-name.token';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: COMPONENT_NAME_TOKEN,
			useValue: 'AppComponent',
		},
	],
})
export class AppComponent {
	title = 'Angular-learn-js-180422';
	property = 'property';

	@ViewChild(SidenavComponent, { static: true })
	private sidenavComponent!: SidenavComponent;

	onMenuClick() {
		this.sidenavComponent.onToggleSidenav();
	}
}
