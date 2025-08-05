import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenOverlayComponent } from './pen-overlay.component';

describe('PenOverlayComponent', () => {
  let component: PenOverlayComponent;
  let fixture: ComponentFixture<PenOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PenOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
