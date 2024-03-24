import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FormsModule, RouterModule,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-form';
  
  
}
