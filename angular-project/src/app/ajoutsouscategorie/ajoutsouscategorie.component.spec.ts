import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsouscategorieComponent } from './ajoutsouscategorie.component';

describe('AjoutsouscategorieComponent', () => {
  let component: AjoutsouscategorieComponent;
  let fixture: ComponentFixture<AjoutsouscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutsouscategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutsouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
