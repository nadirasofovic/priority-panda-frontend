// @ts-ignore

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import { WorkspacetasksService } from "../../services/get-workspace-tasks";
import { OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-workspacepage',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgForOf
  ],
  templateUrl: './workspacepage.component.html',
  styleUrls: ['./workspacepage.component.css']
})

export class WorkspacepageComponent implements OnInit {

  allworkspaces: any[] = [];

  constructor(private service: WorkspacetasksService) {}

  ngOnInit(): void {
    this.service.getWorkspace().subscribe(workspace => {
      this.allworkspaces = workspace;
    });
  }
}
