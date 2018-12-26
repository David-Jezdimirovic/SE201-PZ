import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnospodatakaComponent } from './unospodataka.component';

describe('UnospodatakaComponent', () => {
  let component: UnospodatakaComponent;
  let fixture: ComponentFixture<UnospodatakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnospodatakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnospodatakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
