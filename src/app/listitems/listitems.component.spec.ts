import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymuseumComponent } from './listitems.component';

describe('MymuseumComponent', () => {
  let component: MymuseumComponent;
  let fixture: ComponentFixture<MymuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MymuseumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
