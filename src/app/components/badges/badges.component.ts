import { Component } from '@angular/core';
import {Badge} from "../../methods/badge-dto.interface";
import {BadgeService} from "../../services/badges";

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent {
  badges: Badge[] = [];

  constructor(private badgeService: BadgeService) { }

  ngOnInit(): void {
    const userId = 1;
    this.badgeService.getBadgesByUserId(userId).subscribe((data: Badge[]) => {
      this.badges = data;
    });
  }
}
