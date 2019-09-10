import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
 

 
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReservationFormComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule 

  ],
  providers: [],
  bootstrap: [AppComponent,NavigationComponent,ReservationFormComponent]
})
export class AppModule { }
