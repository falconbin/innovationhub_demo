import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherFormComponent } from './another-form.component';

describe('AnotherFormComponent', () => {
  let component: AnotherFormComponent;
  let fixture: ComponentFixture<AnotherFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
