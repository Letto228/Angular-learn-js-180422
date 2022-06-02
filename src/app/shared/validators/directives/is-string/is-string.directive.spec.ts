import { Component, NgModule, SimpleChange, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { IsStringDirective } from './is-string.directive';
import { IsStringModule } from './is-string.module';

describe('IsStringDirective IS', () => {
	const directive = new IsStringDirective();

	it('should create an instance', () => {
		expect(directive).toBeTruthy();
	});

	it('Контрол без числа', () => {
		const error = directive.validate(new FormControl('String'));

		expect(error).toBeNull();
	});

	it('Контрол с числом', () => {
		const error = directive.validate(new FormControl('123'));

		expect(error).toEqual({ isString: 'is not string' });
	});
});

@Component({
	selector: 'app-test',
	template: ` <input #input [ngModel]="search" appIsString /> `,
})
class TestComponent {
	search = '123';

	@ViewChild('input', { static: true, read: NgModel }) model!: NgModel;
}

fdescribe('IsStringDirective', () => {
	let fixture: ComponentFixture<TestComponent>;
	let component: TestComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestComponent],
			imports: [IsStringModule, FormsModule, BrowserAnimationsModule, BrowserTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);
		component = fixture.componentInstance;
	});

	it('Start error', fakeAsync(() => {
		// component.search = '321';
		fixture.detectChanges();

		tick(0);

		expect(component.model.errors).toEqual({ isString: 'is not string' });
	}));
});
