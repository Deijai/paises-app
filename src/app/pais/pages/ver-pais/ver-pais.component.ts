import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisType } from '../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  public pais!: PaisType;
  public errorMsg: boolean = false;

  constructor(
    private paisService: PaisService,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRouter.params
      .pipe(
        switchMap(({ id }) => this.paisService.pesquisarPaisById(id)),
        tap( console.log )
      )
      .subscribe((res) => {
        this.errorMsg = false;
        this.pais = res;
      });
  }
}
