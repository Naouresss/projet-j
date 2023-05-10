import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesouscategorieComponent } from './updatesouscategorie.component';

describe('UpdatesouscategorieComponent', () => {
  let component: UpdatesouscategorieComponent;
  let fixture: ComponentFixture<UpdatesouscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesouscategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
