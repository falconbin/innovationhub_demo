import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationDialogComponent } from './innovation-dialog.component';

describe('InnovationDialogComponent', () => {
  let component: InnovationDialogComponent;
  let fixture: ComponentFixture<InnovationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
