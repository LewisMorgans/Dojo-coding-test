import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsenseCodingChallengeApiService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './components/index/index.component';
import { AppRoutingModule } from './routing/app-router';

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FontAwesomeModule],
  providers: [PaymentsenseCodingChallengeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
