import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})

export class NewregisterComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

  ngOnInit() { }
  gettingFormData() {
    console.log('this is from ts file');
    this.service.postApiData().subscribe((response) => {
      console.log('response from post data is ', response);
      this.router.navigateByUrl('/Login');
    }, (error) => {
      console.log('error during post is ', error)
    })
  }
}
