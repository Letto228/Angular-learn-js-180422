import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IDialogData {
	name: string;
}

@Component({
	selector: 'app-product-dialog',
	templateUrl: './product-dialog.component.html',
	styleUrls: ['./product-dialog.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDialogComponent {
	constructor(
		private dialogRef: MatDialogRef<ProductDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: IDialogData,
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
