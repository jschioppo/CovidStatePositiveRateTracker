import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TrackerPageComponent } from './tracker-page/tracker-page.component';
import { CovidValueService } from 'src/services/covid-value-fetcher.service';
import { GraphViewComponent } from './tracker-page/graph-view/graph-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerPageComponent,
    GraphViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [CovidValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
