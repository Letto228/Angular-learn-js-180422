import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken('Base url', {
	factory: () => 'https://course-angular.javascript.ru/api',
	providedIn: 'root',
});
