import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learn-js-180422';
	property = 'property';
	sidemenuOpened = true;

	onMenuClick() {
		this.sidemenuOpened = !this.sidemenuOpened;
	}
}
