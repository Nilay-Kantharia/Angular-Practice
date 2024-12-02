import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-2',
  standalone: true,
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {

  @Input() inBgColor:string = '#ffffff';
}
