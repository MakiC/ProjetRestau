import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }
  search(term:string):Observable<Object>{
    // @ts-ignore
    return this.httpClient.get('assets/schedule.json').pipe(map(res => res['events'].filter(evt => evt.title.indexOf(term)>-1)),tap(filterEvents=>console.log('filterEvents',filterEvents)));
  }
}
