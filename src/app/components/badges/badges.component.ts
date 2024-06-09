import { Component, OnInit } from '@angular/core';
import {Badge} from "../../methods/badge.model";
import {BadgeService} from "../../services/badges";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgForOf,
    NgIf,
  ],
  standalone: true,
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  badges: Badge[] = [];

  constructor(private badgeService: BadgeService) { }

  ngOnInit(): void {
    const userId = 1;
    this.badgeService.getBadgesByUserId(userId).subscribe((data: Badge[]) => {
      this.badges = data;
    });
  }
}
