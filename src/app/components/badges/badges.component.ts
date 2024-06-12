import {Component, OnInit} from '@angular/core';
import {Badge} from "../../methods/badge-dto.interface";
import {BadgeService} from "../../services/view-badges-service";

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  badges: Badge[] = [];
  userId: number = 1;

  constructor(private badgeService: BadgeService) {
  }

  ngOnInit(): void {
    this.badgeService.getBadgesByUserId(this.userId).subscribe(
      (data: Badge[]) => {
        this.badges = data;
      },
      (error) => {
        console.error('Error fetching badges', error);
      }
    );
  }
}


