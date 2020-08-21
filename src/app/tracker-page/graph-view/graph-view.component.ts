import { Component, OnInit, Input } from '@angular/core';
import { CovidValueSet } from 'src/models/covid-value-set.model';
import { ChartDataSets } from 'chart.js';
import { LineGraph } from 'src/models/line-graph.model';
import { DayRange } from 'src/models/day-range.enum';
import { CovidValue } from 'src/models/covid-value.model';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit {

  @Input() stateData: CovidValueSet;

  valueSetInRange: CovidValue[];
  lineChartModel: LineGraph = new LineGraph();

  dayRange: DayRange = DayRange.Week;

  constructor() {
    
  }

  public ngOnInit() {
    
    this.initializeGraph();
  }

  ngOnChanges(){
  }


  initializeGraph(): void{
    
    this.lineChartModel.lineChartData = [];
    var days = 0;

    switch(this.dayRange){
      case DayRange.Week:
        days = 7;
        break;
      case DayRange.Month:
        days = 30;
        break;
    }

    this.valueSetInRange = [];
    this.valueSetInRange = this.stateData.valueSet.slice(Math.max(this.stateData.valueSet.length - days, 0));
    
    this.lineChartModel.lineChartOptions = {};

    let maxPercent: number = 0;

    this.lineChartModel.lineChartLabels = [];
    this.valueSetInRange.forEach(value => {

      if(value.percentPositive > maxPercent) maxPercent = value.percentPositive;

      var month = value.date.getMonth() + 1;
      var day = value.date.getDate();

      this.lineChartModel.lineChartLabels.push(month.toString() + "/" + day.toString());
    });

    this.setGraphOptions(maxPercent);
    
    let dataSet: ChartDataSets = {
      data: [],
      label: '% Positive'
    };

    this.valueSetInRange.forEach(set => {
      dataSet.data.push(set.percentPositive);
    });

    this.lineChartModel.lineChartData.push(dataSet);
  }

  setGraphOptions(maxPercent: number): void{
    this.lineChartModel.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            max: Math.ceil(maxPercent),
            min: 0,
            sampleSize: 1,
            fontStyle: "bold"
          }
        }],
        xAxes: [{
          ticks: {
            fontStyle: "bold"
          }
        }]
      },
    };
  }
}
