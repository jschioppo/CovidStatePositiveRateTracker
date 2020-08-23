import { CovidValue } from './covid-value.model';
import { State } from './state.model';

export interface CovidValueSet{
    state: State;
    dayData: CovidValue[];
}