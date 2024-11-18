import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';

  addRedClass(){
    this.div1BgColor = 'bg-danger'
  }

  addBlueClass(){
    this.div1BgColor = 'bg-primary'
  }

  toggleDiv2Class(){
    this.isDiv2Active =! this.isDiv2Active;
  }
}
