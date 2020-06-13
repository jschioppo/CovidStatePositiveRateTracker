import { Component, OnInit } from '@angular/core';
import { CovidValueService } from 'src/services/covid-value-fetcher.service';

@Component({
  selector: 'app-tracker-page',
  templateUrl: './tracker-page.component.html',
  styleUrls: ['./tracker-page.component.scss']
})
export class TrackerPageComponent implements OnInit {

  constructor(private covidValueService: CovidValueService) { }

  ngOnInit(): void {
  }

}
