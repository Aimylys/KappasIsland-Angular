import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListobjectComponent } from './checkmonters.component';

describe('ListobjectComponent', () => {
  let component: ListobjectComponent;
  let fixture: ComponentFixture<ListobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListobjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
