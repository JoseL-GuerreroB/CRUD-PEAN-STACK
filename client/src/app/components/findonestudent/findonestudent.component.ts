import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { allDataStudent } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-findonestudent',
  templateUrl: './findonestudent.component.html',
  styleUrls: ['./findonestudent.component.scss']
})
export class FindonestudentComponent {
  constructor(
    public dialogRef: MatDialogRef<FindonestudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: allDataStudent,
  ) { }
}
