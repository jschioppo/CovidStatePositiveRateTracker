import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { CovidValueSet } from 'src/models/covid-value-set.model';
import { ChartDataSets } from 'chart.js';
import { LineGraph } from 'src/models/line-graph.model';
import { DayRange } from 'src/models/day-range.enum';
import { CovidValue } from 'src/models/covid-value.model';
import { State } from 'src/models/state.model';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit {

  @Input() stateData: CovidValueSet;
  @Input() statesData: CovidValueSet[];
  @Input() dayRange: number;

  lineChartModel: LineGraph = new LineGraph();
  

  constructor() {
    
  }

  public ngOnInit() {
  }

  ngOnChanges(){
    this.lineChartModel = new LineGraph();
    this.initializeGraph();
  }


  initializeGraph(): void{
    //Get the last X days worth of data
    //let valueSetInRange: CovidValue[] = this.stateData.dayData.slice(Math.max(this.stateData.dayData.length - this.dayRange2, 0));
    
    var maxPercent: number = 0;
    this.stateData.dayData.forEach(value => {

      if(value.percentPositive > maxPercent) maxPercent = value.percentPositive;

      var month = value.date.getMonth() + 1;
      var day = value.date.getDate();

      this.lineChartModel.lineChartLabels.push(month.toString() + "/" + day.toString());
    });
    this.lineChartModel.lineChartOptions.scales.yAxes[0].ticks.max = Math.ceil(maxPercent);

    
    var dataSet: ChartDataSets = {
      data: [],
      label: '% Positive'
    };

    this.stateData.dayData.forEach(set => {
      dataSet.data.push(set.percentPositive);
    });

    this.lineChartModel.lineChartData.push(dataSet);
  }

  public addState(state: State): void{
    var stateData = this.statesData.find(data => data.state.code === state.code);
    this.addStateToDataSet(stateData);
  }

  public removeState(state: State): void{

  }

  private addStateToDataSet(stateData: CovidValueSet){

    if(stateData == undefined) return;

    var maxPercent: number = this.lineChartModel.lineChartOptions.scales.yAxes[0].ticks.max;
    if(maxPercent == undefined || maxPercent === 100) maxPercent = 0;

    stateData.dayData.forEach(value => {

      if(value.percentPositive > maxPercent) maxPercent = value.percentPositive;

      var month = value.date.getMonth() + 1;
      var day = value.date.getDate();

      this.lineChartModel.lineChartLabels.push(month.toString() + "/" + day.toString());
    });
    this.lineChartModel.lineChartOptions.scales.yAxes[0].ticks.max = Math.ceil(maxPercent);

    
    var dataSet: ChartDataSets = {
      data: [],
      label: stateData.state.label
    };

    this.stateData.dayData.forEach(set => {
      dataSet.data.push(set.percentPositive);
    });

    this.lineChartModel.lineChartData.push(dataSet);
  }
}
