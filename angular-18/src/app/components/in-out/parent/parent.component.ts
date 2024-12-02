import { Component } from '@angular/core';
import { Child1Component } from "../child-1/child-1.component";
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  bgColor1:string = '#ffffff';
  bgColor2:string = '#ffffff';

  updateclr1(color1:string){
    this.bgColor2 = color1;
  }

  updateclr2(color2:string){
    this.bgColor1 = color2;
  }
}
