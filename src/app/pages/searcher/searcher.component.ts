import { Component } from '@angular/core';
import { GeodbService } from 'src/app/services/geodb.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  displayedColumns: string[] = ['id', 'name', 'region', 'visited'];
  dataSource = [];
  total = 0;

  constructor(private geodbService: GeodbService) {}

  ngOnInit() {
    this.fetchCities();
  }

  fetchCities() {
    this.geodbService.getCities().subscribe((cities: any) => {
      console.log(cities);
      const { data } = cities;
      this.dataSource = data.map((city: any) => {
        const { id, name, region } = city;
        return { id, name, region, visited: false };
      });
      this.total = cities.metadata.totalCount;
    });
  }

  onPaginate(event: any) {
    console.log(event);
    //const { pageIndex, pageSize } = event;
    // this.geodbService.getCities(pageIndex, pageSize).subscribe((cities: any) => {
    //   const { data } = cities;
    //   this.dataSource = data.map((city: any) => {
    //     const { id, name, region } = city;
    //     return { id, name, region, visited: false };
    //   });
    // });
  }
}
