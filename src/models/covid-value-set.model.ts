import { State } from './state.model';
import { CovidValue } from './covid-value.model';

export class CovidValueSet{
    state: string;
    valueSet: CovidValue[];

    constructor(state: string){
        this.state = state;
        this.valueSet = [];
    }
}