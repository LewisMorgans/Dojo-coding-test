import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './index.component';
import { PaymentsenseCodingChallengeApiService } from '../../services';
import { MockPaymentsenseCodingChallengeApiService } from '../../testing/mock-paymentsense-coding-challenge-api.service';

describe('[AppComponent] Test Suite', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, FontAwesomeModule],
        declarations: [IndexComponent],
        providers: [{ provide: PaymentsenseCodingChallengeApiService, useClass: MockPaymentsenseCodingChallengeApiService }],
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title value of 'Paymentsense Coding Challenge'`, () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Paymentsense Coding Challenge!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(IndexComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Paymentsense Coding Challenge!');
  });
});
