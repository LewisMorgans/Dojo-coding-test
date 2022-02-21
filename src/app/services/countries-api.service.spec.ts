import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountriesApiService } from './countries-api.service';
import { AppPaths } from '../shared/enum/app-paths';

describe('[CountriesApiService] Test Suite', () => {
  let service: CountriesApiService;
  let _httpMock: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      }).compileComponents();
      service = TestBed.inject(CountriesApiService);
      _httpMock = TestBed.inject(HttpTestingController);
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('[GetCountries$] should create a HTTP GET request to the API & return mock country data', () => {
    const API = `${AppPaths.HOST}${AppPaths.API}${AppPaths.Countries}`;

    service.getCountries$().subscribe(country => {
      expect(country).toEqual({ name: 'Wales', Alpha3Code: '1337', population: '350000' });
    });

    const _req = _httpMock
      .expectOne({
        url: API,
        method: 'GET',
      })
      .flush({
        name: 'Wales',
        Alpha3Code: '1337',
        population: '350000',
      });
  });

  afterEach(() => {
    _httpMock.verify();
  });
});
