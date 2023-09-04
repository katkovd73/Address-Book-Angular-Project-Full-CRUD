import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontactComponent } from './newcontact.component';

describe('NewcontactComponent', () => {
  let component: NewcontactComponent;
  let fixture: ComponentFixture<NewcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcontactComponent]
    });
    fixture = TestBed.createComponent(NewcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
