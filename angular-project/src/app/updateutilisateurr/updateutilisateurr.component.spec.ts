import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateutilisateurrComponent } from './updateutilisateurr.component';

describe('UpdateutilisateurrComponent', () => {
  let component: UpdateutilisateurrComponent;
  let fixture: ComponentFixture<UpdateutilisateurrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateutilisateurrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateutilisateurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
