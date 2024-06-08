import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";

@Component({

  selector: 'app-personal-list',

  templateUrl: './personal-list.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink
  ],

  styleUrls: ['./personal-list.component.css']

})

export class PersonalListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }



}
