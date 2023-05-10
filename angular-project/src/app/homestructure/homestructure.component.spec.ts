import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestructureComponent } from './homestructure.component';

describe('HomestructureComponent', () => {
  let component: HomestructureComponent;
  let fixture: ComponentFixture<HomestructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
