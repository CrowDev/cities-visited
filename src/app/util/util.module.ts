import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  exports: [
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
  ]
})
export class UtilModule { }
