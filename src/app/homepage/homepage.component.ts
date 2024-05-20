import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from './UserService';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = '';
  form: FormGroup;
  users: any[];

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      email: [''],
      username: [''],
      password: [''],
      isLogin: [false]
    });
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  submitData(type: 'login' | 'signup') {
    if (type === 'login') {
      this.userService.loginUser(this.form.value).subscribe(response => {
        console.log(response);
        // Handle response
      });
    } else {
      this.userService.createUser(this.form.value).subscribe(response => {
        console.log(response);
        // Handle response
      });
    }
  }
}
