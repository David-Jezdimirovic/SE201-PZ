import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreiranjepacijentaComponent } from './kreiranjepacijenta.component';

describe('KreiranjepacijentaComponent', () => {
  let component: KreiranjepacijentaComponent;
  let fixture: ComponentFixture<KreiranjepacijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreiranjepacijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreiranjepacijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
