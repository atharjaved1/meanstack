import { Component,  OnInit } from '@angular/core';
import { FormGroup,  FormControl,  Validators} from '@angular/forms';
import {  NgxSpinnerService} from "ngx-spinner";
import { MyformserviceService } from '../myformservice.service';
import {myForm} from './myform';


// Meta Data of Class [Decorator]
@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
  providers: [MyformserviceService],
})

//Start Class
export class ReservationFormComponent implements OnInit {

  //Access Modifiers 
  public _id: string;
  public name: string;
  public email: string; 
  public arrivaldate: Date; 
  public numberofguest: Number;
  public freePickup: Boolean;
  public flightNumber: string;
  public specicalRequest: string;

  public roomType = ['Single', 'Double', 'Flat'];

  public reservations : myForm[];


  //Class Constructor
  constructor(private spinner: NgxSpinnerService,private _resser:MyformserviceService) {}

  //Initialized all data-bound properties of a directive
  ngOnInit() { 
      this.spinner.show();
      setTimeout(() => { 
          this.spinner.hide();
      }, 2000); 

      this._resser.getAllReservation().subscribe(reservation=>this.reservations=reservation);

  }
  

  // Define Pattrens of properties
  usernamePattren = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  emailPattren = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

  
  //Reactive form validation rules Call the Constructor of above included Library FormGroup
  myForm = new FormGroup({
    
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.usernamePattren)]),
      roomType: new FormControl('', [Validators.required]),
      arrivaldate: new FormControl('', [Validators.required, Validators.pattern(this.emailPattren)]),
      numberofguest: new FormControl('', [Validators.required]),
      freePickup: new FormControl('', [Validators.required]),
      flightNumber: new FormControl('', [Validators.required]),
      specicalRequest: new FormControl('', [Validators.required]),

  });

  addreservationData(myForm)  {
    console.log(myForm);
    let freePickup;
    if (  myForm.value.freePickup == 'No') {
      freePickup = false;
    }else{
      freePickup = true;
    }
    let newReservation  = {
      name:myForm.value.name,
      email:myForm.value.email,
      roomType: myForm.value.roomType,
      arrivaldate: myForm.value.arrivaldate,
      numberofguest: myForm.value.numberofguest,
      freePickup: freePickup,
      flightNumber: myForm.value.flightNumber,
      specicalRequest: myForm.value.specicalRequest
    }

    console.log(newReservation);
   //Save Reservation record in mongoDB
    this._resser.saveReservationRecord(newReservation).subscribe(result => {
		this.reservations.push(result.contact); 
    });
  }

  // Delete data from table rows on index basis
  
  DeleteReservation(id:any){
    let newReservation  = {
      body:{
        _id:id
      }
    }
    this._resser.deletereservation(newReservation).subscribe(result=>{
      this.reservations.splice(id,1);
    })
  
    }

  // Update User 

      updateReservation(_id) {
  
        let getRecordReser = {

         id: this._id,

         reservationContact
         : {
              name:this.name,
              email:this.email,
              roomType: this.roomType,
              arrivaldate:this.arrivaldate,
              numberofguest: this.numberofguest,
              freePickup: this.freePickup,
              flightNumber:this.flightNumber,
              specicalRequest: this.specicalRequest 
          }
        }
         
      this._resser.UpdateByid(getRecordReser).subscribe(result => {
        this.reservations.push(result);
      });
    
      
      }

  //Update User
      // edit reservation [Seting values of editable fields

      editreservation(id:any){ 
        { 
            for (var i =0;i<this.reservations.length;i++)
            {

              if(this.reservations[i]._id==id){
                
                var student = this.reservations[i]
                
                this._id = student._id
            this.name = student.name
            this.email= student.email
            this.arrivaldate= student.arrivaldate
            this.numberofguest= student.numberofguest
            this.freePickup= student.freePickup
            this.flightNumber= student.flightNumber
            this.specicalRequest= student.specicalRequest
              }
            }
        }
      }

      // On Update (Get Values from table row from [Form Fields] and change accordingly will update in table row)
      // updateReservation(index) {
      //     this.reservations[index] = this.myForm.value;
      // }  
  }
// End Class