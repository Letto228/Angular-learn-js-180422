import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'json',
	pure: false,
})
export class JsonPipe implements PipeTransform {
	transform(obj: Object): string {
		console.log('called');
		return JSON.stringify(obj);
	}
}
