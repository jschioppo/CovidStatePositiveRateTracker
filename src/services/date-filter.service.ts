import { Injectable } from '@angular/core';
import { DayRange } from 'src/models/day-range.enum';
import { CovidValueSet } from 'src/models/covid-value-set.model';
import { CovidValue } from 'src/models/covid-value.model';

@Injectable()
export class DateFilterService{
    private getCurrentMonth(): number{
        return (new Date()).getMonth();
    }

    private filterDataMonths(stateCovidData: CovidValue[], monthCount: number): CovidValue[]{
        var currentMonth = this.getCurrentMonth();
        
        var monthRange = currentMonth - monthCount;
        var months: number[] = [];
        for(var i = monthRange; i <= currentMonth; i++) months.push(i);
        
        return stateCovidData.filter(x => months.includes(x.date.getMonth()));
    }

    public filterDataSet(stateCovidData: CovidValue[], dayRange: DayRange): CovidValue[]{
        var newDataSet: CovidValue[] = [];

        switch(dayRange){
            case DayRange.AllTime:
                newDataSet = stateCovidData;
                break;
            case DayRange.Week:
                newDataSet = stateCovidData.slice(Math.max(stateCovidData.length - 7, 0));
                break
            case DayRange.Month:
                //Month count is 0 based since we start with the current month
                newDataSet = this.filterDataMonths(stateCovidData, 0);
                break;
            case DayRange.ThreeMonths:
                newDataSet = this.filterDataMonths(stateCovidData, 2);
                break;
        }

        
        newDataSet = newDataSet.filter(data => data.percentPositive < 100 && data.percentPositive > 0 && data.tested > 50);
        return newDataSet;
    }

    
}