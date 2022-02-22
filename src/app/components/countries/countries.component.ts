import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CountriesApiService } from '../../services/countries-api.service';
import { Countries } from '../../models/countries.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public countries: Countries;
  public selectedCountry: Object = null;
  public countryCount = -1;

  constructor(private readonly countriesApiService: CountriesApiService) {}

  ngOnInit() {
    this.mapper();
  }

  public async mapper(): Promise<Countries> { // change to private
    return (this.countries = await this.countriesApiService
      .getCountries$()
      .pipe(
        map((country: Countries) => {
          for (let countryKey in country) {
            this.countryCount++;
          }
          return country;
        })
      )
      .toPromise());
  }
}
