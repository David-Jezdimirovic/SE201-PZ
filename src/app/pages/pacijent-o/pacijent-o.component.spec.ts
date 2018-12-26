import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentOComponent } from './pacijent-o.component';

describe('PacijentOComponent', () => {
  let component: PacijentOComponent;
  let fixture: ComponentFixture<PacijentOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacijentOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacijentOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
