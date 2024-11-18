import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible: boolean = false;
  isDiv2Visile: boolean = true;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;
  selectedState: string = '';

  cityArray: string[] = ['Surat', 'Vadodara', 'Ahemdabad', 'Rajkot'];

  studentList: any[] =[
    {studId:12, name:"AAA", city: 'Pune', isActive: false},
    {studId:56, name:"BBB", city: 'Mumbai', isActive: false},
    {studId:66, name:"CCC", city: 'Jalgao', isActive: false},
    {studId:82, name:"DDD", city: 'Surat', isActive: true},
    {studId:45, name:"EEE", city: 'Nagpur', isActive: false},
    {studId:64, name:"FFF", city: 'Thane', isActive: false}
  ]

  showDiv1(){
    this.isDiv1Visible = true;
  }

  hideDiv1(){
    this.isDiv1Visible = false;
  }

  toggleDiv2(){
    this.isDiv2Visile = !this.isDiv2Visile;
  }
}
