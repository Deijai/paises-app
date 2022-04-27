import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PaisType } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-regiao',
  templateUrl: './por-regiao.component.html',
  styleUrls: ['./por-regiao.component.css']
})
export class PorRegiaoComponent implements OnInit, OnChanges {


  public regioes: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public regiaoAtiva: string = '';

  public placeholder = 'Por região';
  public paises: PaisType[] = [];
  public errorMsg: boolean = false;
  public pesquisa: string = '';

  constructor(private paisService: PaisService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit(): void {
  }

  public ativarRegiao(regiao: string){
    this.regiaoAtiva = regiao;

    this.paisService.pesquisarPaisByRegiao(this.regiaoAtiva).subscribe(
      ( res ) => {
        console.log(res);
        this.paises = res;

      },
      ( error ) => {
        this.errorMsg = false;
      }
    );

  }

}
