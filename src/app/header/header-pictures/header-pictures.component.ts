import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dogs-header-pictures',
  templateUrl: './header-pictures.component.html',
  styleUrls: ['./header-pictures.component.css']
})
export class HeaderPicturesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
