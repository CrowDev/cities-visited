import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  exports: [
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
  ]
})
export class UtilModule { }
