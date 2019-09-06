import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  constructor() { }
    
  //AccessModifires
    public reservations = Array(); 
    public mname : String;
    public email : String; 
    public roomtypes = ['Single', 'Double'];
    public arrivaldate : String;
    public numberofguest : String;
    public freepickup : boolean;
    public flightnumber : String;
    public specialrequest : String;
    public row_obj : String;
    public room : string;

    //Add Reservation 
    AddReservation(){ 
      let newReservation = {  
        mname:this.mname,
        email:this.email, 
        room:this.room,
        arrivaldate:this.arrivaldate,
        numberofguest:this.numberofguest, 
        freepickup:this.freepickup,
        flightnumber:this.flightnumber, 
        specialrequest:this.specialrequest,
      } 
      //Clear Record When submit
      this.reservations.push(newReservation);
        this.mname='';
        this.email='';
        this.numberofguest=''; 
        this.flightnumber='';
        this.specialrequest=''; 
        // console.log(this.reservations)
      }

      //Delete Reservation Record
      DeleteReservation(index){ 
        // this.reservations.pop();  
        this.reservations.splice(index,1);
      }

      //Edit Reservation
      editReservation(index){
        this.reservations = this.reservations.filter((value,key)=>{
          
          this.mname = value[index].mname;
          this.email = value[index].email;
          this.room = value[index].room;
          this.arrivaldate = value[index].arrivaldate;
          this.numberofguest = value[index].numberofguest;
          this.freepickup = value[index].freepickup;
          this.flightnumber = value[index].flightnumber;
          this.specialrequest = value[index].specialrequest;
      
          return true;
        });
      }
      //Update reservation
      // updateReservation(){
      //   this.reservations = this.reservations.filter((value,key)=>{
      //     if(value.id == value.id){
      //       value.name = value.name;
      //     }
      //     return true;
      //   });
      // }
      updateReservation(index): void {
        this.reservations.forEach(item => {
          if (!this.reservations[item.key]) {
            this.reservations[item.key] = { 
              data: item
            };
            this.mname = item[index].mname;
            this.email = item[index].email;
            this.room = item[index].room;
            this.arrivaldate = item[index].arrivaldate;
            this.numberofguest = item[index].numberofguest;
            this.freepickup = item[index].freepickup;
            this.flightnumber = item[index].flightnumber;
            this.specialrequest = item[index].specialrequest;
          }
        });
      }

    ngOnInit() {

    }

}
