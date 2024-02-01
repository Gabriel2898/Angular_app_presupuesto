import { Component } from '@angular/core';
import { PresupuestoService } from '../../services/presupuestos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-presupuestos',
  templateUrl: './ingresar-presupuestos.component.html',
  styleUrl: './ingresar-presupuestos.component.css'
})
export class IngresarPresupuestosComponent {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _presupuestoService: PresupuestoService,
              private router: Router) {
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  ngOnInit(): void {
  }

  agregar() {
    if(this.cantidad > 0) {
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/gastos'])
    } else {
      this.cantidadIncorrecta = true;
    }
  }

}
