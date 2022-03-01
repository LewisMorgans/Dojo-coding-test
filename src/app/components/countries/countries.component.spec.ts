import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CountriesComponent } from './countries.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { CountriesApiService } from '../../services/countries-api.service';
import { Countries } from '../../models/countries.model';
import { By } from '@angular/platform-browser';
import { Country } from '../../models/country.model';

describe('[CountriesComponent] Test Suite', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  const mockCountryData = [
    {
      name: 'Wales',
      population: '350000',
      alpha3Code: '1337',
    } as unknown as Country,
  ];
  const mockCountryCounter = [mockCountryData].length;

  const mockCountriesApiService = {
    getCountries$: () => of(mockCountryData),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountriesComponent],
        imports: [HttpClientModule],
        providers: [{ provide: CountriesApiService, useValue: mockCountriesApiService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.listOfCountries = [];
  });

  it('should create [CountriesComponent]', () => {
    expect(component).toBeTruthy();
  });

  it('[Mapper] should subscribe to API and populate listOfCountries array with mockCountries', () => {
    expect(component.listOfCountries).toEqual([]);
    component.ngOnInit();
    expect(component.listOfCountries).toContain(mockCountryData[0]);
  });

  it('[Selected] should be false by default, and change to true on country selection click event', fakeAsync(() => {
    expect(component.showCountryData).toBeFalsy();
    fixture.debugElement.nativeElement.querySelector('.countrySelection').click();
    fixture.detectChanges();
    tick();
    expect(component.showCountryData).toBeTruthy();
  }));

  it('DOM country LI should contain mockCountryData name after ngOnInit completes', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    const countryList = fixture.debugElement.nativeElement.querySelector('.countrySelection').innerHTML;
    expect(countryList).toEqual(mockCountryData[0].name);
  }));

  it('[CountryCounter] counter variable should be updated to the length of the returned array after ngOnInit', () => {
    expect(component.listOfCountries.length).toEqual(0);
    component.ngOnInit();
    expect(component.listOfCountries.length).toEqual(mockCountryCounter);
  });
});
