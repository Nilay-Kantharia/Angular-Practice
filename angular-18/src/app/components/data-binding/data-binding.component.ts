import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular - 18";
  stateName: string = "";
  inputType = "radio";
  myClassName: string = "bg-primary"
  rollNo: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  firstName = signal("Nilay");

  constructor() {
    
  }

  changeCourseName() {
    this.courseName = "React JS";
    this.firstName.set("Sachin Tendulkar")
  }

  showAlert(message:string){
    alert(message)
  }
}
