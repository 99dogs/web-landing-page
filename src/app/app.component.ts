import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dogs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) { 
  }

  title = 'Dogs99';
}
