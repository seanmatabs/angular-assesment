import { Component, OnInit } from '@angular/core';
import {DataService} from '../core/data.service';
import {forkJoin} from 'rxjs';
import {SetOne, SETS, SetTwo} from '../models/models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  setOne: SetOne;
  setTwo: SetTwo;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadSets();
  }
  loadSets() {
    this.dataService.getSet(SETS.ONE).subscribe(response1 => {
      this.setOne = response1 as SetOne;
    });
    this.dataService.getSet(SETS.TWO).subscribe(response2 => {
      this.setTwo = response2 as SetTwo;
    });
  }
}
