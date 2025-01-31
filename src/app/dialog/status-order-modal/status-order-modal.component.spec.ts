import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOrderModalComponent } from './status-order-modal.component';

describe('StatusOrderModalComponent', () => {
  let component: StatusOrderModalComponent;
  let fixture: ComponentFixture<StatusOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusOrderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
