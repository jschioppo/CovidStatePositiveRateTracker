import { State } from './state.model';

export class CovidValue{
    tested: number;
    positive: number;
    date: Date;
    percentPositive: number;

    constructor(tested: number, positive: number, date: Date){
        this.tested = tested;
        this.positive = positive;
        this.date = date;
        this.percentPositive = positive / tested;
    }
}