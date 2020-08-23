import { Injectable } from '@angular/core';

@Injectable()
export class DateFilterService{
    private getCurrentMonth(): number{
        return (new Date()).getMonth();
    }
}