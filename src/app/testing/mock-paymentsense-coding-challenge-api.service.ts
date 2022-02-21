import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockPaymentsenseCodingChallengeApiService {
  public getHealth$(): Observable<string> {
    return of('Healthy');
  }
}
