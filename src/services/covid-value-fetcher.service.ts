import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CovidValueSet } from 'src/models/covid-value-set.model';

export class CovidValueService{
    constructor(private http: HttpClient){}
    
    private stateCovidData$ = new Subject<CovidValueSet[]>();

    public getStateData(stateCode: string){
        
    }

    private checkStateExistance(stateCode: string){
        const stateExist = false;

        this.stateCovidData$.asObservable().subscribe(data => {
            if(!data.some(state => state.state.code === stateCode)){
                //Add state
            }
        });
    }

    private addStateData(stateCode: string){
        this.http.get('https://covidtracking.com/api/v1/states/' + stateCode + '/daily.json').subscribe(data => {
            console.log("DATA: " + data);
        });
    }

    private parseStateData(){

    }

    private clearStateData(){

    }
}