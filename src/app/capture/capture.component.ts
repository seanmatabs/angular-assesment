import { Component, OnInit } from '@angular/core';
import {forkJoin} from 'rxjs';
import {DataService} from '../core/data.service';
import {SetOne, SETS, SetTwo} from '../models/models';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent implements OnInit {

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

  update($event: any, set: string) {
    this.dataService.updateSet(set, $event).subscribe(res => {
      this.loadSets();
    });
  }
}
