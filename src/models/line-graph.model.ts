import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export class LineGraph{

    LineGraph(){
        console.log("CONSTRUCTOR")
        this.lineChartOptions = {};
    }
    public lineChartData: ChartDataSets[];
    public lineChartOptions: (ChartOptions);
    public lineChartColors: Color[];
    public lineChartLabels: Label[];
    public lineChartLegend: boolean;
    public lineChartType: string = 'line';
    public lineChartPlugins = [];
}