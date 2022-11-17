import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, Observable} from "rxjs";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
searchTerm=new FormControl();
searchTerms$:Observable<string>=this.searchTerm.valueChanges;
  constructor() { }

  ngOnInit(): void {
    //On s'a  bonne
    this.searchTerms$.pipe(debounceTime(500)).subscribe(data =>console.log(data))
  }

}
