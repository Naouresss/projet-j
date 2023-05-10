import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeroleComponent } from './homerole.component';

describe('HomeroleComponent', () => {
  let component: HomeroleComponent;
  let fixture: ComponentFixture<HomeroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeroleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
