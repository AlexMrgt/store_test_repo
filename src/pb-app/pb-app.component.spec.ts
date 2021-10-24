import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbAppComponent } from './pb-app.component';

describe('PbAppComponent', () => {
  let component: PbAppComponent;
  let fixture: ComponentFixture<PbAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
