import { Injectable } from "@angular/core";
import { State } from 'src/models/state.model';
import { CovidValueSet } from 'src/models/covid-value-set.model';


@Injectable()
export class StateService{

    private states: State[] = [];

    constructor(){
        this.states = [
            {code: "AK", label: "Alaska"},
            {code: "AS", label: "American Samoa"},
            {code: "AZ", label: "Arizona"},
            {code: "AR", label: "Arkansas"},
            {code: "CA", label: "California"},
            {code: "CO", label: "Colorado"},
            {code: "CT", label: "Connecticut"},
            {code: "DE", label: "Delaware"},
            {code: "DC", label: "District Of Columbia"},
            {code: "FM", label: "Federated States Of Micronesia"},
            {code: "FL", label: "Florida"},
            {code: "GA", label: "Georgia"},
            {code: "GU", label: "Guam"},
            {code: "HI", label: "Hawaii"},
            {code: "ID", label: "Idaho"},
            {code: "IL", label: "Illinois"},
            {code: "IN", label: "Indiana"},
            {code: "IA", label: "Iowa"},
            {code: "KS", label: "Kansas"},
            {code: "KY", label: "Kentucky"},
            {code: "LA", label: "Louisiana"},
            {code: "ME", label: "Maine"},
            {code: "MH", label: "Marshall Islands"},
            {code: "MD", label: "Maryland"},
            {code: "MA", label: "Massachusetts"},
            {code: "MI", label: "Michigan"},
            {code: "MN", label: "Minnesota"},
            {code: "MS", label: "Mississippi"},
            {code: "MO", label: "Missouri"},
            {code: "MT", label: "Montana"},
            {code: "NE", label: "Nebraska"},
            {code: "NV", label: "Nevada"},
            {code: "NH", label: "New Hampshire"},
            {code: "NJ", label: "New Jersey"},
            {code: "NM", label: "New Mexico"},
            {code: "NY", label: "New York"},
            {code: "NC", label: "North Carolina"},
            {code: "ND", label: "North Dakota"},
            {code: "MP", label: "Northern Mariana Islands"},
            {code: "OH", label: "Ohio"},
            {code: "OK", label: "Oklahoma"},
            {code: "OR", label: "Oregon"},
            {code: "PW", label: "Palau"},
            {code: "PA", label: "Pennsylvania"},
            {code: "PR", label: "Puerto Rico"},
            {code: "RI", label: "Rhode Island"},
            {code: "SC", label: "South Carolina"},
            {code: "SD", label: "South Dakota"},
            {code: "TN", label: "Tennessee"},
            {code: "TX", label: "Texas"},
            {code: "UT", label: "Utah"},
            {code: "VT", label: "Vermont"},
            {code: "VI", label: "Virgin Islands"},
            {code: "VA", label: "Virginia"},
            {code: "WA", label: "Washington"},
            {code: "WV", label: "West Virginia"},
            {code: "WI", label: "Wisconsin"},
            {code: "WY", label: "Wyoming"}
        ];
    }
    public getListOfStates(): State[]{
        var states: State[] = [
            {code: "US", label: "U.S. Cumulative"},
            {code: "AK", label: "Alaska"},
            //{code: "AS", label: "American Samoa"},
            {code: "AZ", label: "Arizona"},
            {code: "AR", label: "Arkansas"},
            {code: "CA", label: "California"},
            {code: "CO", label: "Colorado"},
            {code: "CT", label: "Connecticut"},
            {code: "DE", label: "Delaware"},
            {code: "DC", label: "District Of Columbia"},
            //{code: "FM", label: "Federated States Of Micronesia"},
            {code: "FL", label: "Florida"},
            {code: "GA", label: "Georgia"},
            {code: "GU", label: "Guam"},
            {code: "HI", label: "Hawaii"},
            {code: "ID", label: "Idaho"},
            {code: "IL", label: "Illinois"},
            {code: "IN", label: "Indiana"},
            {code: "IA", label: "Iowa"},
            {code: "KS", label: "Kansas"},
            {code: "KY", label: "Kentucky"},
            {code: "LA", label: "Louisiana"},
            {code: "ME", label: "Maine"},
            //{code: "MH", label: "Marshall Islands"},
            {code: "MD", label: "Maryland"},
            {code: "MA", label: "Massachusetts"},
            {code: "MI", label: "Michigan"},
            {code: "MN", label: "Minnesota"},
            {code: "MS", label: "Mississippi"},
            {code: "MO", label: "Missouri"},
            {code: "MT", label: "Montana"},
            {code: "NE", label: "Nebraska"},
            {code: "NV", label: "Nevada"},
            {code: "NH", label: "New Hampshire"},
            {code: "NJ", label: "New Jersey"},
            {code: "NM", label: "New Mexico"},
            {code: "NY", label: "New York"},
            {code: "NC", label: "North Carolina"},
            {code: "ND", label: "North Dakota"},
            //{code: "MP", label: "Northern Mariana Islands"},
            {code: "OH", label: "Ohio"},
            {code: "OK", label: "Oklahoma"},
            {code: "OR", label: "Oregon"},
            {code: "PW", label: "Palau"},
            {code: "PA", label: "Pennsylvania"},
            {code: "PR", label: "Puerto Rico"},
            {code: "RI", label: "Rhode Island"},
            {code: "SC", label: "South Carolina"},
            {code: "SD", label: "South Dakota"},
            {code: "TN", label: "Tennessee"},
            {code: "TX", label: "Texas"},
            {code: "UT", label: "Utah"},
            {code: "VT", label: "Vermont"},
            //{code: "VI", label: "Virgin Islands"},
            {code: "VA", label: "Virginia"},
            {code: "WA", label: "Washington"},
            {code: "WV", label: "West Virginia"},
            {code: "WI", label: "Wisconsin"},
            {code: "WY", label: "Wyoming"}
          ];

          return states;
    }

    getState(code: string): State{
        return this.states.find(state => {
            return state.code === code;
        });
    }
}