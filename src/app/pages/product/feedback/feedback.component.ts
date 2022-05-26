import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-feedback',
	templateUrl: './feedback.component.html',
	styleUrls: ['./feedback.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent {
	// constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

	navigateToDescription() {
		// this.router.navigate(['../description'], {relativeTo: this.activatedRoute});
		// this.router.navigateByUrl('../description');
	}
}
