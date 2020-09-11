import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InnovationDialogComponent } from '../innovation-dialog/innovation-dialog.component';
import { MatTableDataSource } from '@angular/material/table/';
import { Http, Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';

export interface Innovation {
  Position: number,
  EID: string,
  Role: string,
  SeatNo: number
}
let tkmdatasource;
let tpmdatasource;
const PMDatasource: Innovation[] = [
  { Position: 1, EID: 'jian.a.zheng', Role: 'Team leader', SeatNo: 181 },
  { Position: 2, EID: 'cunlong.liu', Role: 'Team leader', SeatNo: 182 },
  { Position: 3, EID: 'sharry.huaiyu.gao', Role: 'Developer', SeatNo: 183 },
  { Position: 4, EID: 'yan.sang', Role: 'Developer', SeatNo: 184 },
  { Position: 5, EID: 'jing.wang', Role: 'Developer', SeatNo: 185 },
  { Position: 6, EID: 'qing.tao', Role: 'Tester', SeatNo: 186 }
];



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  HaveData = false;
  params: any;
  temail = '';
  email = '';

  tkmdatasource = [];
  userName = '';
  panelOpenState = false;
  constructor(private dialog: MatDialog, private http: Http) {

  }

  ngOnInit(): void {
    this.ObtainKMList(this.temail);
  }

  ObtainKMList(email: string) {


    this.http.get('/employee/email/' + email + '')
      .subscribe((resp_data: any) => {
        var TabelData = resp_data._body;
      }
      )

    // email = email.trim();

    // const options = email ? { params: new HttpParams().set('email', email) } : {};
    // this.http.get('/employee/email/', options)
    //   .subscribe((resp_data: any) => {
    //     var TabelData = resp_data._body;
    //   }
    //   )

  };


  displayedColumns: string[] = ['Position', 'EID', 'Role', 'SeatNo'];
  // tkmdatasource = new MatTableDataSource<Innovation>(KMDatasource);
  tpmdatasource = new MatTableDataSource<Innovation>(PMDatasource);

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
