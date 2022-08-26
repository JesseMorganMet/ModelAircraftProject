import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let mockData = "placeName";
  let mockData2 = 1 ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('Should match snapshot', () => {
    component.d = mockData;
    component.i = mockData2;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
