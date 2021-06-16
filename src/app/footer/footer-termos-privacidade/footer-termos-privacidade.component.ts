import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-termos-privacidade',
  templateUrl: './footer-termos-privacidade.component.html',
  styleUrls: ['./footer-termos-privacidade.component.css']
})
export class FooterTermosPrivacidadeComponent implements OnInit {

  constructor() { }
  
  public termosAceito: boolean = false;

  ngOnInit(): void {
  }

  aceitarTermos(){
    this.termosAceito = true
  }

}
