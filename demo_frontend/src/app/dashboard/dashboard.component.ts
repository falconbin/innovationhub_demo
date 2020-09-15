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

export interface Employee {
  id: number,
  email: string,
  password: string
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  PMDatasource = [
    { id: 6, email: 'qing.tao1', password: 186 }
  ];
  datasource;
  tpmdatasource: any[];
  tkmdatasource: any[];
  HaveData = false;
  params: any;
  temail = '';
  email = '';
  userName = '';
  panelOpenState = false;
  constructor(private dialog: MatDialog, private http: Http) {
    this.tpmdatasource = this.PMDatasource;
  }

  ngOnInit(): void {
    this.InitalEmployee();
  }

  InitalEmployee() {
    this.http.get('/employee/')
      .subscribe((resp_data: any) => {
        this.datasource = JSON.parse(resp_data._body);
        if (this.datasource != undefined && this.datasource.length > 0) {
          this.HaveData = true;
        }
      })
  }

  ObtainKMList(email: string) {

    if (email == '') {
      this.http.get('/employee/')
        .subscribe((resp_data: any) => {
          this.datasource = JSON.parse(resp_data._body);
          if (this.datasource != undefined && this.datasource.length > 0) {
            this.HaveData = true;
          }
        })
    }
    else {
      this.http.get('/employee/eid/' + email + '')
        .subscribe((resp_data: any) => {
          this.datasource = JSON.parse(resp_data._body);

          if (this.tkmdatasource != undefined && this.tkmdatasource.length > 0) {
            this.HaveData = true;
          }
        })
    }
  };

  kmdispalyColumns: string[] = ['id', 'EID', 'ROLE', 'Group', 'email'];
  displayedColumns: string[] = ['id', 'email', 'password'];

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
