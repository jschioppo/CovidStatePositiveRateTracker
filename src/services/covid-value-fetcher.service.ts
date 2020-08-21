import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CovidValueSet } from 'src/models/covid-value-set.model';
import { Injectable } from '@angular/core';
import { CovidValue } from 'src/models/covid-value.model';

@Injectable({
    providedIn: 'root'
})
export class CovidValueService{
    private stateCovidData$ = new Subject<CovidValueSet[]>();

    constructor(private http: HttpClient){
        this.http.get('https://api.covidtracking.com/v1/states/daily.json').subscribe(data => {
            var stateData = this.parseStateData(data);
            this.stateCovidData$.next(stateData);
        });
    }
    
    public getStatesData(){
        return this.stateCovidData$.asObservable();    
    }

    private parseStateData(data){
        let allStatesCovidData: CovidValueSet[] = [];

        data.forEach(covidData => {
            console.log("ELEMENT: ", covidData);

            var state = covidData["state"];
            var positive = covidData["positive"];
            var negative = covidData["negative"];
            var date = covidData["date"];

            var covidValue = new CovidValue(positive + negative, positive, this.parseDate(date));
            var stateCovidValues = allStatesCovidData.find(stateObj => {
                return stateObj.state === state;
            });

            //First check is for states that aren't in the Covid Value Set yet (will run once for each state)
            if(stateCovidValues === undefined){
                let newStateSet: CovidValueSet = new CovidValueSet(state);
                
                newStateSet.valueSet.push(covidValue);
                allStatesCovidData.push(newStateSet);
            }
            else{
                stateCovidValues.valueSet.unshift(covidValue);
            }

        });

        return allStatesCovidData;
    }

    private parseDate(date: number): Date{
        var dateStr = date.toString();
        
        var year = Number(dateStr.substring(0, 4));
        var month = Number(dateStr.substring(4, 6)) - 1;
        var day = Number(dateStr.substring(6, 8));

        var parsedDate = new Date(year, month, day);

        return parsedDate;
    }
}