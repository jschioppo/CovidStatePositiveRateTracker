import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidValueService } from 'src/services/covid-value-fetcher.service';
import { CovidValueSet } from 'src/models/covid-value-set.model';
import { State } from 'src/models/state.model';
import { StateService } from 'src/services/state-helper.service';
import * as $ from 'jquery';
import { DateFilterService } from 'src/services/date-filter.service';
import { DayRange } from 'src/models/day-range.enum';
import { GraphViewComponent } from './graph-view/graph-view.component';

@Component({
  selector: 'app-tracker-page',
  templateUrl: './tracker-page.component.html',
  styleUrls: ['./tracker-page.component.scss']
})
export class TrackerPageComponent implements OnInit {


  statesCovidData: CovidValueSet[];
  countryCovidData: CovidValueSet;
  stateCovidData: CovidValueSet;
  filteredStateCovidData: CovidValueSet;

  stateCode: string;
  states: State[];
  dayRange: DayRange = DayRange.Week;

  private static stateService: StateService;
  private static dateFilterService: DateFilterService;
  
  @ViewChild(GraphViewComponent) graphViewChild: GraphViewComponent;

  constructor(private covidValueService: CovidValueService, private stateService: StateService, private dateFilterService: DateFilterService) {
    this.stateService = stateService;
    this.dateFilterService = dateFilterService;
    this.dayRange = DayRange.Week;

    this.states = this.stateService.getListOfStates();

    covidValueService.getStatesData().subscribe(data => {
      this.statesCovidData = data;
    });

    covidValueService.getUsData().subscribe(data => {
      this.countryCovidData = data;
    });
  }

  ngOnInit(): void {
  }

  onStateChange(stateCode){
    if(stateCode == 'US') this.stateCovidData = this.countryCovidData;
    else this.stateCovidData = this.covidValueService.getStateDataSet(this.statesCovidData, stateCode);

    this.filterDataSet();

    this.graphViewChild.addState(null);
  }

  onDateRangeChange(range){
    $(':input:checked').parent('.btn').addClass('active');
    $(':input:not(:checked)').parent('.btn').removeClass('active');

    this.dayRange = DayRange[range];
    this.filterDataSet();
  }

  private filterDataSet(): void{
    if(this.stateCovidData != undefined) this.filteredStateCovidData = {
      state: this.stateCovidData.state, 
      dayData: this.dateFilterService.filterDataSet(this.stateCovidData.dayData,this.dayRange)
    };
  }


}
