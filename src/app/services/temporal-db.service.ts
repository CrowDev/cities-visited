import { Injectable } from '@angular/core';
import { CityTable } from '../@types/types';

@Injectable({
  providedIn: 'root'
})
export class TemporalDbService {

  private data: CityTable[] = [];

  constructor() { }

  insertCity(city: CityTable) {
    this.data.push(city);
  }

  removeCity(id: number) {
    this.data = this.data.filter((city) => city.id !== id);
  }

  isCityVisited(id: number) {
    return !!this.data.find((city) => city.id === id);
  }

  getCities() {
    return this.data;
  }

  getCity(id: number) {
    return this.data.find((city) => city.id === id);
  }
}
