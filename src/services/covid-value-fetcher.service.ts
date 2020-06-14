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
        this.http.get('https://covidtracking.com/api/v1/states/daily.json').subscribe(data => {
            var stateData = this.parseStateData(data);
            this.stateCovidData$.next(stateData);
        });
    }
    
    public getStatesData(){
        return this.stateCovidData$.asObservable();    
    }

    private parseStateData(data){
        let stateData: CovidValueSet[] = [];

        data.forEach(element => {
            var state = element["state"];
            var positive = element["positive"];
            var negative = element["negative"];
            var date = element["date"];

            var valueSet = new CovidValue(positive + negative, positive, this.parseDate(date));
            var stateSet = stateData.find(stateObj => {
                return stateObj.state === state;
            });

            if(stateSet === undefined){
                //console.log("UNDEFINED");
                let newStateSet: CovidValueSet = new CovidValueSet(state);
                newStateSet.valueSet.push(valueSet);
                stateData.push(newStateSet);
            }
            else{
                //console.log("DEFINED");
                stateSet.valueSet.unshift(valueSet);
            }
        });

        return stateData;
    }

    private parseDate(date: number): Date{
        var dateStr = date.toString();
        
        var year = Number(dateStr.substring(0, 4));
        var month = Number(dateStr.substring(4, 6));
        var day = Number(dateStr.substring(6, 8));

        var parsedDate = new Date(year, month, day);
        return parsedDate;
    }
}