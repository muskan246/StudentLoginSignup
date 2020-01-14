import { SharedService } from './shared.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NewregisterComponent } from './register/newregister/newregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { UserdetailsComponent, UserdetailsComponentDialog } from './userdetails/userdetails.component';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { EditComponent } from './edit/edit.component';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NewregisterComponent,
    LoginComponent,
    UserdetailsComponent,
    UserdetailsComponentDialog,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  entryComponents: [UserdetailsComponentDialog, EditComponent]
})
export class AppModule { }
