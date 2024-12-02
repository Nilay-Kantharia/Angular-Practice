import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component {

  @Input() inBgColor:string = '#ffffff';
  @Output() messageEvent = new EventEmitter<string>();

  changeclr2(event: Event){
    const input = event.target as HTMLInputElement;
    const color = input.value;
    this.messageEvent.emit(color);
  }
}
