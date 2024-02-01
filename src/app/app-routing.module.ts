import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestosComponent } from './components/ingresar-presupuestos/ingresar-presupuestos.component';
import { GastosComponent } from './components/gastos/gastos.component';


const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full' },
  { path: 'ingresarPresupuesto', component: IngresarPresupuestosComponent},
  { path: 'gastos', component: GastosComponent },
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
