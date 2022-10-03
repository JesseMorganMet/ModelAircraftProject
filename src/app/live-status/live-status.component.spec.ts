import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveStatusComponent} from './live-status.component';

describe('LiveStatusComponent', () => {
  let component: LiveStatusComponent;
  let fixture: ComponentFixture<LiveStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveStatusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LiveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should go into popupShow() and make hidden variable equal to "show"', () => {
    component.ngOnChanges("change")
    expect(component.hidden).toBe("show");
  });
  it('Should make hidden variable equal to "show"', () => {
    component.popupShow()
    expect(component.hidden).toBe("show");
  });
  it('Should make hidden variable equal to "hide"', () => {
    component.popupClose()
    expect(component.hidden).toBe("hide");
  });
});
