import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremestipacijentaComponent } from './premestipacijenta.component';

describe('PremestipacijentaComponent', () => {
  let component: PremestipacijentaComponent;
  let fixture: ComponentFixture<PremestipacijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremestipacijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremestipacijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
