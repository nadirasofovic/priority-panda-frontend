import { Component, OnInit } from '@angular/core';
import {Badge} from "../badge.model";
import {BadgeService} from "../services/badges";

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
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