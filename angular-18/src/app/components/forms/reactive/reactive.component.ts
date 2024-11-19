import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.minLength(3), Validators.required]),
    lastName: new FormControl(),
    userName: new FormControl("", [Validators.email]),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    isAcceptTerms: new FormControl()
  });

  formValue: any;

  onSave(){
    this.formValue = this.studentForm.value; 
  }
}
