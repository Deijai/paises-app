import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegiaoComponent } from './pages/por-regiao/por-regiao.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegiaoComponent, VerPaisComponent, PaisTableComponent, PaisInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[PorCapitalComponent, PorPaisComponent, PorRegiaoComponent, VerPaisComponent]
})
export class PaisModule { }
