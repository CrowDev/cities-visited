import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CityData, CityTable, Result } from 'src/app/@types/types';
import { GeodbService } from 'src/app/services/geodb.service';
import { TemporalDbService } from 'src/app/services/temporal-db.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  displayedColumns: string[] = ['id', 'name', 'region', 'actions'];
  dataSource: CityTable[] = [];
  total = 0;
  pageSize = 10;
  offset = 0;

  constructor(private geodbService: GeodbService, private db: TemporalDbService) {}

  ngOnInit() {
    this.fetchCities();
  }

  fetchCities() {
    const params = { offset: this.offset, limit: this.pageSize };
    this.geodbService.getCities(params).subscribe((result: Result) => {
      console.log(result);
      const { data } = result;
      this.dataSource = data.map((city: CityData) => {
        const { id, name, region } = city;
        return { id, name, region, visited: false };
      });
      this.total = result.metadata.totalCount;
    });
  }

  onPaginate(event: PageEvent) {
    const { pageIndex, pageSize } = event;
    this.offset = pageIndex * pageSize;
    this.pageSize = pageSize;
    this.fetchCities();
  }

  handleAddCity(city: CityTable) {
    this.db.insertCity(city);
  }

  handleRemoveCity(city: CityTable) {
    this.db.removeCity(city.id);
  }
}
