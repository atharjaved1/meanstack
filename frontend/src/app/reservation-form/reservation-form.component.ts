import { Component,  OnInit } from '@angular/core';
import { FormGroup,  FormControl,  Validators} from '@angular/forms';
import {  NgxSpinnerService} from "ngx-spinner";

// Meta Data of Class [Decorator]
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})

//Start Class
export class ReservationFormComponent implements OnInit {

  //Access Modifiers 
  public reservations = [];
  public room = ['Single', 'Double', 'Flat'];

  //Class Constructor
  constructor(private spinner: NgxSpinnerService) {}

  //Initialized all data-bound properties of a directive
  ngOnInit() { 
      this.spinner.show();
      setTimeout(() => { 
          this.spinner.hide();
      }, 2000); 
  }

  // Define Pattrens of properties
  usernamePattren = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  emailPattren = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

  
  //Reactive form validation rules Call the Constructor of above included Library FormGroup
  myForm = new FormGroup({
    
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.usernamePattren)]),
      room: new FormControl('', [Validators.required]),
      arrivaldate: new FormControl('', [Validators.required, Validators.pattern(this.emailPattren)]),
      numberofguest: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      flightnumber: new FormControl('', [Validators.required]),
      specialrequest: new FormControl('', [Validators.required]),

  });


  // Start With Submit Data
  // On Submit Button Click Push All Form Values in Reservation Table rows
  onSubmit() {
      this.reservations.push(this.myForm.value);
  }

  // edit reservation [Seting values of editable fields]
  editreservation(index) {
    this.myForm.get('name').setValue(this.reservations[index].name);
    this.myForm.get('email').setValue(this.reservations[index].email);
    this.myForm.get('room').setValue(this.reservations[index].room);
    this.myForm.get('arrivaldate').setValue(this.reservations[index].arrivaldate);
    this.myForm.get('numberofguest').setValue(this.reservations[index].numberofguest);
    this.myForm.get('gender').setValue(this.reservations[index].gender);
    this.myForm.get('flightnumber').setValue(this.reservations[index].flightnumber);
    this.myForm.get('specialrequest').setValue(this.reservations[index].specialrequest);
}

  // On Update (Get Values from table row from [Form Fields] and change accordingly will update in table row)
  updateReservation(index) {
      this.reservations[index] = this.myForm.value;
  }

  //Delete data from table rows on index basis
  DeleteReservation(index){
    this.reservations.splice(index,1)

  }
}
// End Class