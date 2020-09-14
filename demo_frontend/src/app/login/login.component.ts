import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'AngularMaterialApp';
  email = "";
  password = "";
  eid = "";
  role = "";
  belongTo = "";
  panelOpenState = false;
  checked = false;
  userName = '';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private http: Http, private router: Router) { }

  ngOnInit(): void {
  }

  Login() {

    if (this.email != '' && this.password != '' && this.eid != '' && this.role != '' && this.belongTo != '') {
      let headers = new Headers();
      const time = new Date();
      headers.append('Content-Type', 'application/json');

      const myData = JSON.stringify({
        email: this.email, password: this.password, eid: this.eid,
        role: this.role, belongto: this.belongTo, timeStamp: time
      })
      this.http.post('/employee', myData, { headers })
        .subscribe(
          data => console.log(data),
          err => console.log('Something went wrong!'))
    }

    this.router.navigate(['dashboard']);

  }

}
