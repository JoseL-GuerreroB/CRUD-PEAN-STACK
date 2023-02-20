import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorupdateComponent } from './createorupdate.component';

describe('CreateorupdateComponent', () => {
  let component: CreateorupdateComponent;
  let fixture: ComponentFixture<CreateorupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
