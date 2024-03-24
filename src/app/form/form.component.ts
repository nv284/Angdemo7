import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { FormsModule } from '@angular/forms';
//import  { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  product: Product = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted with values:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
