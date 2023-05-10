import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateutilisateurComponent } from './updateutilisateur.component';

describe('UpdateutilisateurComponent', () => {
  let component: UpdateutilisateurComponent;
  let fixture: ComponentFixture<UpdateutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
