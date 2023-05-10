import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestructureComponent } from './updatestructure.component';

describe('UpdatestructureComponent', () => {
  let component: UpdatestructureComponent;
  let fixture: ComponentFixture<UpdatestructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
