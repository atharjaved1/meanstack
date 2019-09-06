import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    public menus = ['Home', 'About Us', 'Contact Us']
    public num1='';
    public num2='';
    public addtwonum='';
    public getexp='';
    // public result;
    
    public city = ['Faislaabad', 'Lahore']
    public students = Array(); 
    public mname : String;
    public fname : String; 
    public Adress : String;
    
  AddStudent(){ 
    let newStudent = {  
      mname:this.mname,
      fname:this.fname,
      Adress:this.Adress,
    } 
      this.mname='';
      this.fname='';
      this.Adress='';
      this.students.push(newStudent);
      console.log(this.students)
    }
 
  DeleteStudent(){
    
    this.students.pop(); 
    
}

 

  constructor() { }

  ngOnInit() {
  }

  add(){
    return parseInt(this.num1)+parseInt(this.num2);
  }
  sub(){
    return parseInt(this.num1)-parseInt(this.num2);
  }
  multiply(){
    return parseInt(this.num1)*parseInt(this.num2);
  }
  divide(){
    return parseInt(this.num1)/parseInt(this.num2);

  }
  //  showName(){
  //    this.result= "Hi";
  //  }


  addtwo() { 
    var [a,b] = this.addtwonum.split('+');
    return parseInt(a) + parseInt(b);
  }


// Experession 
  mathimeticalexp(){ 
    var expression = this.getexp;
    var result= (eval(expression))
    return result
  }

}