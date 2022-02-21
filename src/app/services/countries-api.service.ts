import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppPaths } from '../shared/enum/app-paths';
import { Countries } from '../models/countries.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesApiService {
  constructor(private readonly httpClient: HttpClient) {}

  public getCountries$(): Observable<Countries> {
    return this.httpClient.get<Countries>(`${AppPaths.HOST}${AppPaths.API}${AppPaths.Countries}`);
  }
}
