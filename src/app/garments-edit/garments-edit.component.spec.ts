import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentsEditComponent } from './garments-edit.component';

describe('GarmentsEditComponent', () => {
  let component: GarmentsEditComponent;
  let fixture: ComponentFixture<GarmentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarmentsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
