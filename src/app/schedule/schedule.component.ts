import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, Observable, switchMap, tap} from "rxjs";
import {ScheduleService} from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
searchTerm=new FormControl();
searchTerms$:Observable<string>=this.searchTerm.valueChanges;
  result: Object ='';

  constructor(private scheduleService: ScheduleService) { }


  ngOnInit(): void {
    //On s'a  bonne
    this.searchTerms$.pipe(debounceTime(100), switchMap(word => this.scheduleService.search(word)), tap(word=>console.log(typeof(word)))).subscribe(data =>this.result=data);
  }

}
