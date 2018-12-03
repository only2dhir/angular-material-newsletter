import { Component } from '@angular/core';
import {MatDialog} from "@angular/material";
import {NewsletterComponent} from "./newsletter/newsletter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-newsletter';

  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      if (!window.sessionStorage.getItem('newsletter')) {
        this.dialog.open(NewsletterComponent, {
          width: '600px',
          data: ''
        });
      }
    }, 10000);
  }
}
