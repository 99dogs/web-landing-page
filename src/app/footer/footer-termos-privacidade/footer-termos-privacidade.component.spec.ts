import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTermosPrivacidadeComponent } from './footer-termos-privacidade.component';

describe('FooterTermosPrivacidadeComponent', () => {
  let component: FooterTermosPrivacidadeComponent;
  let fixture: ComponentFixture<FooterTermosPrivacidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTermosPrivacidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTermosPrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
