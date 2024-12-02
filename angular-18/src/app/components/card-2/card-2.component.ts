import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-card-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-2.component.html',
  styleUrl: './card-2.component.css'
})
export class Card2Component {
  bgColor1: string = '#ffffff';
  bgColor2: string = '#ffffff';
  constructor(private sharedService: SharedServiceService) {this.updateclr2()}
  setclr1(event: Event) {
    const input = event.target as HTMLInputElement;
    const newColor = input.value;
    this.sharedService.setBgColor1(newColor);
    this.updateclr2()
  }
  updateclr2() {
    this.sharedService.getBgColor2().subscribe((color) => {
      this.bgColor2 = color;
    })
  }
}
