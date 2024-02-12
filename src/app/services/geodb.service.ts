import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeodbService {

  private readonly API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

  constructor(
    private http: HttpClient
  ) { }

  getCities() {
    const options = this.getOptions();
    return this.http.get(this.API_URL, options);
  }

  getOptions() {
    return {
      headers: this.getHeaders(),
      params: this.getParams()
    };
  }

  getParams() {
    return new HttpParams()
      .set('countryIds', 'CL')
      .set('limit', '10');
  }

  getHeaders() {
    const key = environment.rapidApi.key;
    return new HttpHeaders()
      .set('X-RapidAPI-Key', key)
      .set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');
  }
}
