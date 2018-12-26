import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentOpuComponent } from './pacijent-opu.component';

describe('PacijentOpuComponent', () => {
  let component: PacijentOpuComponent;
  let fixture: ComponentFixture<PacijentOpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacijentOpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacijentOpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
