import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CountriesApiService } from '../../services/countries-api.service';
import {Observable, Subscription} from 'rxjs';
import { Country } from '../../models/country.model';
import { Countries } from '../../models/countries.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements AfterViewInit {
  public countries: Countries;
  public selectedCountry: Object;
  public countryCount = 0;

  constructor(private readonly countriesApiService: CountriesApiService) {}

  ngAfterViewInit() {
   this.mapper();
  }

  async mapper(): Promise<Countries> {
    let countryIndex = 0;
    return this.countries = await this.countriesApiService.getCountries$()
      .pipe(
        map((country) => {
          for (let countryKey in country) {
            this.countryCount = countryIndex++
          }
          return country;
        })
      )
      .toPromise();

  }
}
