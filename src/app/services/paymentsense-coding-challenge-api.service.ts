import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HealthModel } from './health-model';

@Injectable({
  providedIn: 'root',
})
export class PaymentsenseCodingChallengeApiService {
  constructor(private httpClient: HttpClient) {}

  public getHealth$(): Observable<HealthModel> {
    return this.httpClient.get<HealthModel>('http://localhost:3000/api/health', { responseType: 'json' });
  }
}
