import { Component, OnInit } from '@angular/core';
import {QuickLunchService} from '../services/quick-lunch.service';
import {Food} from '../model/food.interface';


@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards =  [
        { title: 'Pizzas', cols: 2, rows: 1, id:'pzz' },
        { title: 'Burger', cols: 2, rows: 1 , id:'brg'},
        { title: 'Galette ', cols:2, rows: 1, id:'glt' }
      ];

  burgers: Food[] =[];
  pizzas: Food[]=[];
  galettes: Food[]=[];
  constructor(private qls: QuickLunchService) {} //dès lors il va faire l'injection de dependance
  ngOnInit():void{
    this.burgers=this.qls.getBurgers();
   this.burgers=this.qls.getBurgers();
   this.pizzas=this.qls.getPizzas();
   this.galettes=this.qls.getGalettes();
  }
}
