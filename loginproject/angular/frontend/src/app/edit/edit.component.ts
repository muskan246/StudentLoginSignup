import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formData:any;
  checkingvalue;

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.formData = this.service.getData();
    console.log("PPPPPP",this.formData)
    console.log("dob",this.formData.dob);
      
    
    this.checkingvalue = this.formData.gender
  
  }

  newDialogData()
  {
  console.log("@@@@ formdata", this.formData);
  console.log("!!!!! dialog",this.service.details.value);
  if (this.service.details.value.fullName != "")
  this.formData.fullName = this.service.details.value.fullName
  if (this.service.details.value.email!= "")
  this.formData.email = this.service.details.value.email
  if (this.service.details.value.password != "")
  this.formData.password = this.service.details.value.password
  if (this.service.details.value.confirmPassword != "")
  this.formData.confirmPassword = this.service.details.value.confirmPassword
  if (this.service.details.value.contactno != "")
  this.formData.contactno = this.service.details.value.contactno
  if (this.service.details.value.dob != "")
  this.formData.dob = this.service.details.value.dob
  if (this.service.details.value.gender != "")
  this.formData.gender = this.service.details.value.gender
  if (this.service.details.value.houseno != "")
  this.formData.houseno = this.service.details.value.houseno
  if (this.service.details.value.street != "")
  this.formData.street = this.service.details.value.street
  if (this.service.details.value.city != "")
  this.formData.city = this.service.details.value.city
  
  
  
  console.log("new@@", this.formData)
  this.service.updateApi(this.formData).subscribe((response)=>{
    console.log('Response for update : ', response); 
    this.service.displayDataFromDb().subscribe((response) => {
      console.log('response from post data is ', response);
      console.log(response[0]);
    }, (error) => {
      console.log('error during post is ', error);
    })

  },(error)=> {
    console.log('Error is :',error);
    
  })
  }
  
}

