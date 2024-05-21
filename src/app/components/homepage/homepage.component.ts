import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "../footer/footer.component";


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
  title = ''
  form: FormGroup;

  constructor(FormBuilder: FormBuilder) {
    this.form = FormBuilder.group(
      {
        email: [],
        username: [],
        password: [],
        isLogin: []
      }
    );
  }

  submitData({type}: { type: 'login' | 'signup' }) {
    if (type === 'login') {
      this.form.patchValue({isLogin: true}); // Set isLogin to true for login type
    } else {
      this.form.patchValue({isLogin: false}); // Set isLogin to false for register type
    }
    console.log('Form:', this.form.value);
  }
}
