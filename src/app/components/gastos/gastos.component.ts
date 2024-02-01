import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuestos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent implements OnInit {


  constructor(private _presupuestosService: PresupuestoService,
              private router: Router) { }

  ngOnInit(): void {
    if(this._presupuestosService.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto']);
    }
  }

}
