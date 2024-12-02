import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedServiceService } from '../../services/shared-service.service';
@Component({
  selector: 'app-card-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css'
})
export class Card1Component {
  bgColor1:string = '#ffffff';
  bgColor2:string = '#ffffff';
  constructor(private sharedService: SharedServiceService){this.updateclr1()}
  setclr2(event: Event){
    const input = event.target as HTMLInputElement;
    const newColor = input.value;
    this.sharedService.setBgColor2(newColor);
    this.updateclr1()
  }

  updateclr1(){
    this.sharedService.getBgColor1().subscribe((color) => {
      this.bgColor1 = color;
    })
  }
}
