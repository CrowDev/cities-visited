import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class UtilModule { }
