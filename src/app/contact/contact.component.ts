import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  standard={
    firstName:'Maeva',
    lastName:'Fess',
    role: 'Glouton',
    phoneNumber:'0680780759'
  }
  somelier={
    firstName:'Maki',
    lastName:'Cam',
    role: 'Accueil',
    phoneNumber:'0680780779'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
