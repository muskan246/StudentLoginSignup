import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material'
import { MatDatepickerModule, MatTooltipModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ]
})
export class MaterialModule { }
