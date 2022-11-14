import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm} from "@angular/forms";


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  reservationForm:FormGroup=new FormGroup({first: new FormControl('Nancy', Validators.minLength(2)), last: new FormControl('Drew')});
  date=new Date();
  timeOptions=["12:00","12:30","13:00","13:30","20:00","20:30","21:00","21:30"];
  peopleOptions=[1,2,3,4,5,6,7,8]
  constructor(private fb:FormBuilder) { }

  client={firstName:'', lastName:'', email:'', tel:''}

  finaliseReservation(form: NgForm){
    console.log(form.value);
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
  this.reservationForm=this.fb.group({
  date:new Date(),
  time:"",
  people:1
});
  }
}
