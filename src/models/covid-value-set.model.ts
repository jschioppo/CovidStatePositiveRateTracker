import { State } from './state.model';

export interface CovidValueSet{
    state: State;
    valueSet: CovidValueSet[];
}