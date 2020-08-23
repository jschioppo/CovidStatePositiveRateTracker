import { Component, OnInit } from '@angular/core';
import { CovidValueService } from 'src/services/covid-value-fetcher.service';
import { CovidValueSet } from 'src/models/covid-value-set.model';
import { State } from 'src/models/state.model';
import { StateService } from 'src/services/state-helper.service';

@Component({
  selector: 'app-tracker-page',
  templateUrl: './tracker-page.component.html',
  styleUrls: ['./tracker-page.component.scss']
})
export class TrackerPageComponent implements OnInit {

  stateCovidData: CovidValueSet[];
  stateData: CovidValueSet;
  states: State[];
  private static stateService: StateService
  

  constructor(private covidValueService: CovidValueService, private stateService: StateService) {
    this.stateService = stateService;
    this.states = this.stateService.getListOfStates();

    covidValueService.getStatesData().subscribe(data => {
      this.stateCovidData = data;
    });
  }

  ngOnInit(): void {
  }

  onStateChange(stateCode){
    this.stateData = this.stateService.getStateDataSet(this.stateCovidData, stateCode);
  }
}
