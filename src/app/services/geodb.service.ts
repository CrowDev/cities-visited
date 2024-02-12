import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ParamsOptions, Result } from '../@types/types';

@Injectable({
  providedIn: 'root'
})
export class GeodbService {

  private readonly API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

  constructor(
    private http: HttpClient
  ) { }

  getCities(params: ParamsOptions) {
    const options = this.getOptions(params);
    return this.http.get<Result>(this.API_URL, options);
  }

  getOptions(params: ParamsOptions) {
    return {
      headers: this.getHeaders(),
      params: this.getParams(params)
    };
  }

  getParams({ offset, limit }: ParamsOptions) {
    return new HttpParams()
      .set('countryIds', 'CL')
      .set('limit', limit)
      .set('offset', offset);
  }

  getHeaders() {
    const key = environment.rapidApi.key;
    return new HttpHeaders()
      .set('X-RapidAPI-Key', key)
      .set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');
  }
}
