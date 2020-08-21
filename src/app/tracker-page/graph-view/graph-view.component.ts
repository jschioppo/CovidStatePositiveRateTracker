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

  lineChartModel: LineGraph = new LineGraph();
  dayRange: DayRange = DayRange.Week;

  constructor() {
    
  }

  public ngOnInit() {
    this.setGraphOptions();
    this.initializeGraph();
  }

  ngOnChanges(){
  }


  initializeGraph(): void{
    
    this.lineChartModel.lineChartData = [];
    this.lineChartModel.lineChartLabels = [];

    //Get the last X days worth of data
    let valueSetInRange: CovidValue[] = this.stateData.valueSet.slice(Math.max(this.stateData.valueSet.length - this.dayRange, 0));
    
    let maxPercent: number = 0;

    valueSetInRange.forEach(value => {

      if(value.percentPositive > maxPercent) maxPercent = value.percentPositive;

      var month = value.date.getMonth() + 1;
      var day = value.date.getDate();

      this.lineChartModel.lineChartLabels.push(month.toString() + "/" + day.toString());
    });
    this.lineChartModel.lineChartOptions.scales.yAxes[0].ticks.max = Math.ceil(maxPercent);

    
    let dataSet: ChartDataSets = {
      data: [],
      label: '% Positive'
    };

    valueSetInRange.forEach(set => {
      dataSet.data.push(set.percentPositive);
    });

    this.lineChartModel.lineChartData.push(dataSet);
  }

  setGraphOptions(): void{
    this.lineChartModel.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            max: 100,
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
