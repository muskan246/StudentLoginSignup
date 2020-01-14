import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forbiddenNameValidator } from './validator/user-name.validator';
import { PasswordValidator } from './validator/password.validator';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data: any;

  setData(data: any) {
    this.data = data;
    
  }

  getData(): any {
    return this.data;
  }
  private _url: string = 'http://127.0.0.1:3000/user/insertdetails';

  constructor(private http: HttpClient) { }

  details = new FormGroup({

    fullName: new FormControl(''),
    userName: new FormControl('', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    // contactno: new FormControl(''),
    gender: new FormControl(''),
    // dob: new FormControl(''),
    houseno: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
  }, { 'validators': PasswordValidator })

  logindetails = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })
  postApiData() {
    console.log('this is from service fun')
    console.log(this.details.value)
    return this.http.post(this._url, { "fullName": this.details.value.fullName, 'userName': this.details.value.userName, 'email': this.details.value.email, 'password': this.details.value.password, 'gender': this.details.value.gender, 'houseno': this.details.value.houseno, 'street': this.details.value.street, 'city': this.details.value.city })

  }

  getLoginData() {
    console.log(this.logindetails.value)
    return this.http.post('http://127.0.0.1:3000/Login', { "userName": this.logindetails.value.userName, "password": this.logindetails.value.password })

  }
  displayDataFromDb() {
    return this.http.post('http://127.0.0.1:3000/Details', { "userName": this.logindetails.value.userName })
  }

  deleteApi(USERID) {
    console.log("From service file", USERID)
    return this.http.post('http://127.0.0.1:3000/Details/Delete', { "userName": USERID })
  }
  displayApi(USERID) {
    console.log("From service file", USERID)
    return this.http.post('http://127.0.0.1:3000/Details', { "userName": USERID })
  }
  updateApi(updateData) {
    console.log('Update')
    console.log("////", updateData);
    return this.http.put('http://127.0.0.1:3000/update', { "userName": updateData.userName, "fullName": updateData.fullName, "email": updateData.email, "password": updateData.password, "gender": updateData.gender, "houseno": updateData.houseno, "street": updateData.street, "city": updateData.city })
  }
}
