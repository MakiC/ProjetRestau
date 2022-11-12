import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  moutons=[
    {race:'balibali', name:'mouton 1'},
    {race:'talaber', name:'mouton 2'},
    {race:'pheul pheul', name:'mouton 3'}];
  constructor() { }

  ngOnInit(): void {
  }

}
