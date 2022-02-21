import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PaymentsenseCodingChallengeApiService } from './paymentsense-coding-challenge-api.service';

describe('[PaymentsenseCodingChallengeApiService] Test Suite', () => {
  let service: PaymentsenseCodingChallengeApiService;
  let _httpMock: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      }).compileComponents();
      service = TestBed.inject(PaymentsenseCodingChallengeApiService);
      _httpMock = TestBed.inject(HttpTestingController);
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('[GetHealth] Should make a GET request to the API and return mock Boolean value', () => {
    const API = 'http://localhost:3000/api/health';

    service.getHealth$().subscribe(status => {
      expect(status).toEqual({ healthy: true });
    });

    const _req = _httpMock
      .expectOne({
        url: API,
        method: 'GET',
      })
      .flush({
        healthy: true,
      });
  });

  afterEach(() => {
    _httpMock.verify();
  });
});
