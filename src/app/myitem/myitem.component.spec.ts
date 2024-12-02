import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyobjectComponent } from './myitem.component';

describe('MyobjectComponent', () => {
  let component: MyobjectComponent;
  let fixture: ComponentFixture<MyobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyobjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
