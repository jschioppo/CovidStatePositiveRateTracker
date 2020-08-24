import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, ThemeService } from 'ng2-charts';

export class LineGraph{

    constructor(){
        this.lineChartData = [];
        this.lineChartColors = [];
        this.lineChartLabels = [];
        this.lineChartType = 'line';
        this.lineChartPlugins = [];

        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              text: 'Percent of all COVID-19 tests that return positive',
              display: true,
              fontStyle: "bold",
              fontSize: 18
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  labelString: 'Percent',
                  display: true,
                  fontStyle: "bold"
                },
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
                },
                scaleLabel: {
                  labelString: "Date",
                  display: true,
                  fontStyle: "bold"
                }
              }]
            },
          };
    }
    public lineChartData: ChartDataSets[];
    public lineChartOptions: ChartOptions;
    public lineChartColors: Color[];
    public lineChartLabels: Label[];
    public lineChartLegend: boolean;
    public lineChartType: string;
    public lineChartPlugins: any;
}