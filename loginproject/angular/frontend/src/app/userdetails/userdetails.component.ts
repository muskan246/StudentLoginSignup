import { EditComponent } from './../edit/edit.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog'


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  toggle: boolean;
  res: any;
  res1: any;
  responseFromDelete: string;
  responseFromEdit: string;
  deleteIndex: number;
  editIndex: number;
  formData: any;
  constructor(private service: SharedService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.displayDataFromDb().subscribe((response) => {
      console.log('response from post data is ', response);
      console.log(response[0]);
      // res = response[0];
      this.res = response;

    }, (error) => {
      console.log('error during post is ', error);
    })

  }
  Logout() {
    this.router.navigateByUrl('/Login')
  }


  openDialog(i) {
    this.deleteIndex = i
    const dialogRef = this.dialog.open(UserdetailsComponentDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.responseFromDelete = result
      console.log("neww varr", this.responseFromDelete);
      if (this.responseFromDelete) {
        console.log('index i', this.deleteIndex)
        console.log('username details', this.res[this.deleteIndex].userName)
        this.service.deleteApi(this.res[this.deleteIndex].userName).subscribe((response) => {
          console.log('Response is : ', response);
          console.log("userdetailsapi");
          this.service.displayDataFromDb().subscribe((response) => {
            console.log('response from post data is ', response);
            console.log(response[0]);
            // res = response[0];
            this.res = response;

          }, (error) => {
            console.log('error during post is ', error);
          })

        }, (error) => {
          console.log('Error is :', error);

        })
      }

    });

  }


  editDialog(i) {
    this.service.setData(this.res[i]);

    this.editIndex = i
    console.log("yewww", this.res[this.editIndex].fullName)
    let dialogRefEdit = this.dialog.open(EditComponent, {
      height: '400px',
      width: '630px',
    });
    dialogRefEdit.afterClosed().subscribe(result => {
      console.log(`Edit result: ${result}`);
      this.responseFromEdit = result

      console.log("Edit rsponse", this.responseFromEdit);

      if (this.responseFromEdit) {
        console.log('index i', this.editIndex)
        console.log('username details', this.res[this.editIndex].userName)
        this.service.setData(this.res[this.editIndex]);



      }

    });
  }
//hgfyughfg

  delete(deleteIndex) {
    console.log('index i', deleteIndex)
    console.log('username details', this.res[deleteIndex].userName)
    this.service.deleteApi(this.res[deleteIndex].userName).subscribe((response) => {
      console.log('Response is : ', response);
    }, (error) => {
      console.log('Error is :', error);

    })


  }
}
@Component({
  selector: 'app-userdetails.component.dialog',
  templateUrl: './userdetails.component.dialog.html',

})
export class UserdetailsComponentDialog { }


