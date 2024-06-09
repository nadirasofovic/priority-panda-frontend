import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";



@Component({

    selector: 'app-personal-task-creation',

    templateUrl: './personal-task-creation.component.html',
    standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],

    styleUrls: ['./personal-task-creation.component.css']

})

export class PersonalTaskCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }



}
