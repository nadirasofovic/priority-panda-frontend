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
      this.form.patchValue({isLogin: true});
    } else {
      this.form.patchValue({isLogin: false});
    }
    console.log('Form:', this.form.value);
  }
}
