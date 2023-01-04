import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentsCreateComponent } from './garments-create.component';

describe('GarmentsCreateComponent', () => {
  let component: GarmentsCreateComponent;
  let fixture: ComponentFixture<GarmentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarmentsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
