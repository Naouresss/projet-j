import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutstructureComponent } from './ajoutstructure.component';

describe('AjoutstructureComponent', () => {
  let component: AjoutstructureComponent;
  let fixture: ComponentFixture<AjoutstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
