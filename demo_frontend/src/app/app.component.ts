import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table/';
import { MatDialog } from '@angular/material/dialog';
import { InnovationDialogComponent } from './innovation-dialog/innovation-dialog.component';
import {Http,Headers} from '@angular/http';

export interface Innovation {
  Position: number,
  EID: string,
  Role: string,
  SeatNo: number
}

const KMDatasource: Innovation[] = [
  { Position: 1, EID: 'zhongkai.jia', Role: 'Team leader', SeatNo: 177 },
  { Position: 2, EID: 'qiang.peng', Role: 'Developer', SeatNo: 176 },
  { Position: 3, EID: 'shengpeng.bi', Role: 'Developer', SeatNo: 178 },
  { Position: 4, EID: 'yu.bai', Role: 'Tester', SeatNo: 192 }
];

const PMDatasource: Innovation[] = [
  { Position: 1, EID: 'jian.a.zheng', Role: 'Team leader', SeatNo: 181 },
  { Position: 2, EID: 'cunlong.liu', Role: 'Team leader', SeatNo: 182 },
  { Position: 3, EID: 'sharry.huaiyu.gao', Role: 'Developer', SeatNo: 183 },
  { Position: 4, EID: 'yan.sang', Role: 'Developer', SeatNo: 184 },
  { Position: 5, EID: 'jing.wang', Role: 'Developer', SeatNo: 185 },
  { Position: 6, EID: 'qing.tao', Role: 'Tester', SeatNo: 186 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'AngularMaterialApp';
  email = "";
  password = "";
  panelOpenState = false;
  checked = false;
  userName = '';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  //private router: Router,
  //inject the dialog service via the constructor
  constructor(private dialog: MatDialog,private http: Http) {
  }

  displayedColumns: string[] = ['select', 'Position', 'EID', 'Role', 'SeatNo'];
  tkmdatasource = new MatTableDataSource<Innovation>(KMDatasource);

  tpmdatasource = new MatTableDataSource<Innovation>(PMDatasource);

  //initial the select model
  selection = new SelectionModel<Innovation>(true, []);

  Login() {
    let headers= new Headers();
    const time = new Date();
    headers.append('Content-Type','application/json');

    const myData= JSON.stringify({ email:this.email, password:this.password,timeStamp:time})
    this.http.post('/employee', myData, {headers})
    .subscribe( 
    data=>console.log(data),
    err=>console.log('Something went wrong!'))
  }
  
  kisAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tkmdatasource.data.length;
    return numSelected === numRows;
  }

  kmasterToggle() {
    this.kisAllSelected() ?
      this.selection.clear() :
      this.tkmdatasource.data.forEach(row => this.selection.select(row));
  }

  pisAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tkmdatasource.data.length;
    return numSelected === numRows;
  }
  pmasterToggle() {
    this.pisAllSelected() ?
      this.selection.clear() :
      this.tkmdatasource.data.forEach(row => this.selection.select(row));
  }

  openDialog() {
    //config the dialog detail information such as width,height, data.
    const dialogRef = this.dialog.open(
      InnovationDialogComponent,
      { width: '400px', height: '400px', data: { 'userName': this.userName } }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.userName = result;
    });

  }
  close() {
    this.dialog
  }

}

