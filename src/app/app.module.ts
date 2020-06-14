import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrackerPageComponent } from './tracker-page/tracker-page.component';
import { CovidValueService } from 'src/services/covid-value-fetcher.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackerPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CovidValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
