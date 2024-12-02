import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card1Component } from "../card-1/card-1.component";
import { Card2Component } from "../card-2/card-2.component";

@Component({
  selector: 'app-pub-sub',
  standalone: true,
  imports: [FormsModule, Card1Component, Card2Component],
  templateUrl: './pub-sub.component.html',
  styleUrl: './pub-sub.component.css'
})
export class PubSubComponent {

}
