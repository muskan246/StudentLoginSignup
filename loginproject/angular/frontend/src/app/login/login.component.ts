import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

  ngOnInit() {
  }

  gettingLoginData() {
    this.service.getLoginData().subscribe((response) => {
      console.log('Response is : ', response);
      console.log("qwer", response[0].userName)
      this.router.navigateByUrl('/Details')
    }, (error) => {
      console.log('Error is :', error);

    }
    )
  }

}
