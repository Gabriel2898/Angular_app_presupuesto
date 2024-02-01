import { IngresarPresupuestosComponent } from './components/ingresar-presupuestos/ingresar-presupuestos.component';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarGastosComponent } from './components/gastos/ingresar-gastos/ingresar-gastos.component';
import { ListarGastosComponent } from './components/gastos/listar-gastos/listar-gastos.component';


@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarGastosComponent,
    ListarGastosComponent,
    IngresarPresupuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
