import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CityTable } from 'src/app/@types/types';
import { TemporalDbService } from 'src/app/services/temporal-db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  dataSource: CityTable[] = [];
  pageSize = 10;

  currentPage = 1;
  totalPages = 1;
  displayedData: CityTable[] = [];
  constructor(private db: TemporalDbService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.dataSource = this.db.getCities();
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.dataSource.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.dataSource.length / this.pageSize);
  }

  handleRemoveCity(city: CityTable) {
    this.db.removeCity(city.id);
    this.getCities();
  }

  onPaginate(page: PageEvent) {
    const { pageSize, pageIndex } = page;
    this.pageSize = pageSize;
    this.currentPage = pageIndex + 1;
    this.getCities();
  }
}
