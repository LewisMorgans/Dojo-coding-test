import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../../services/countries-api.service';
import { Countries } from '../../models/countries.model';
import { map } from 'rxjs/operators';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public showCountryData = false;
  public listOfCountries: Country[] = [];
  public countryIndex = -1;

  constructor(private readonly countriesApiService: CountriesApiService) {}

  ngOnInit() {
    this.apiToLocalDataMapper();
  }

  private apiToLocalDataMapper(): void {
    this.countriesApiService
      .getCountries$()
      .pipe(
        map((country: Countries) => {
          for (let countryKey in country) {
            this.listOfCountries.push(country[countryKey] as Country);
          }
        })
      )
      .subscribe();
  }
}
