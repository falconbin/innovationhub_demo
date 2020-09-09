import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-innovation-dialog',
  templateUrl: './innovation-dialog.component.html',
  styleUrls: ['./innovation-dialog.component.css']
})
export class InnovationDialogComponent implements OnInit {

  diauserName: string;
  favoriteSporter: string;

  constructor(private dialogRef: MatDialogRef<InnovationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.diauserName = data.userName;
    this.favoriteSporter = 'Kobe Bryant';
  }

  ngOnInit(): void {
  }


  save(userName) {
    this.dialogRef.afterClosed().subscribe(result => {
      this.diauserName = result;

    });
  }
  close() {
    this.dialogRef.close();
  }

}
