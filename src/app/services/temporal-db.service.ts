import { Injectable } from '@angular/core';
import { CityTable } from '../@types/types';

@Injectable({
  providedIn: 'root'
})
export class TemporalDbService {

  data: CityTable[] = [];

  constructor() { }

  insertCity(city: CityTable) {
    this.data.push(city);
    console.log(this.data)
  }
}
