import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Json } from '../../common/json';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
import {ComParam} from '../../common/comParam';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userinfo: any = {
    username: '',
    password: '',
    email: '',
    mobilenumber: '',
    roleList: ['admin', 'buyer', 'seller'],
    role: 'buyer'
  }

  responseInfo: any = {

    id: '',
    errornum: '',
    errormsg: '',
    userName: '',
    token: ''
  }

  constructor(private http: HttpClient, private json: Json, private crud: Crud, private router: Router,private comParam:ComParam) { }

  ngOnInit(): void {
  }

  registerSubmit() {
    
    //var api = '/user/login/';
    var register_submit_url = this.comParam.register_submit_url;
    this.crud.saveFormWithJsonString(register_submit_url, this.userinfo).subscribe((response: any) => {
      this.responseInfo = response;
      if (200 === this.responseInfo.errornum) {
        //sessionStorage.setItem('token', this.responseInfo.token);
        this.router.navigate(['loginin']);
      } else {
        alert(this.responseInfo.errormsg);
      }
      console.log(response);
    });


  }
}


  //   const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
  //   var api = 'http://localhost:8080/buyer/save';
  //   this.http.post(api,{'username':this.userinfo.username,'password':this.userinfo.password,'email':this.userinfo.email
  // ,'mobilenumber':this.userinfo.mobilenumber
  // }).subscribe((response)=>{
  //     console.log(response);
  //   })
  // }