import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindonestudentComponent } from './findonestudent.component';

describe('FindonestudentComponent', () => {
  let component: FindonestudentComponent;
  let fixture: ComponentFixture<FindonestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindonestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindonestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
