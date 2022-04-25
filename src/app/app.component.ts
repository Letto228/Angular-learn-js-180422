import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learn-js-180422';
	property = 'property';

	shopIcon =
		'https://w7.pngwing.com/pngs/479/409/png-transparent-red-and-white-storage-illustration-computer-icons-online-shopping-e-commerce-retail-store-icon.png';

	log(event: Event) {
		event.stopPropagation();
		console.log(event);
	}
}
