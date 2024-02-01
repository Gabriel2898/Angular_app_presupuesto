import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPresupuestosComponent } from './ingresar-presupuestos.component';

describe('IngresarPresupuestosComponent', () => {
  let component: IngresarPresupuestosComponent;
  let fixture: ComponentFixture<IngresarPresupuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresarPresupuestosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresarPresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
