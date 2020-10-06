import { Component, OnInit } from '@angular/core';

import { Routine } from './routine.model'

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  routines: Routine[] = [
    new Routine('test', [{ name: 'squat', sets: 2 }, { name: 'bench press', sets: 2 }])
  ];

  constructor() { }

  ngOnInit() {
  }

}
