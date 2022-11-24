import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {map} from "rxjs/operators";
import {EveningEvent} from "../model/eveningEvent.interface";
import {Schedule} from "../model/schedule.interface";


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }
  search(term:string):Observable<EveningEvent[]>{

    // @ts-ignore
    return this.httpClient.get<Schedule>('assets/schedule.json').pipe(map(res => res.events.filter(evt => ((evt.title.indexOf(term)>-1)||(evt.description?.indexOf(term)>-1) ))),tap(filterEvents=>console.log('filterEvents',filterEvents)));
  }
}
