import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { PaymentsenseCodingChallengeApiService } from '../../services';

@Component({
  selector: 'index-component',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public faThumbsUp = faThumbsUp;
  public faThumbsDown = faThumbsDown;
  public title = 'Paymentsense Coding Challenge!';
  public paymentsenseCodingChallengeApiIsActive = false;
  public paymentsenseCodingChallengeApiActiveIcon = this.faThumbsDown;
  public paymentsenseCodingChallengeApiActiveIconColour = 'red';

  constructor(private paymentsenseCodingChallengeApiService: PaymentsenseCodingChallengeApiService) {
    paymentsenseCodingChallengeApiService
      .getHealth$()
      .pipe(take(1))
      .subscribe(
        apiHealth => {
          this.paymentsenseCodingChallengeApiIsActive = apiHealth.healthy === true;
          this.paymentsenseCodingChallengeApiActiveIcon = this.paymentsenseCodingChallengeApiIsActive ? this.faThumbsUp : this.faThumbsUp;
          this.paymentsenseCodingChallengeApiActiveIconColour = this.paymentsenseCodingChallengeApiIsActive ? 'green' : 'red';
        },
        _ => {
          this.paymentsenseCodingChallengeApiIsActive = false;
          this.paymentsenseCodingChallengeApiActiveIcon = this.faThumbsDown;
          this.paymentsenseCodingChallengeApiActiveIconColour = 'red';
        }
      );
  }
}
