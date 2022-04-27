import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from './../../services/pais.service';
import { Observable } from 'rxjs';
import { error } from 'console';
import { PaisType } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public paises: PaisType[] = [];
  public paisesSugeridos: PaisType[] = [];
  public errorMsg: boolean = false;
  public pesquisa: string = '';
  public placeholder = 'Por país';

  ngOnInit(): void { }

  constructor( private paisService: PaisService ) {

  }

  public pesquisarRecebe(pesquisa: any) {
    console.log('pesquisa:',  Object.values(pesquisa)[0]  );
    this.pesquisa = pesquisa;
    this.paisService.pesquisarPais( Object.values(this.pesquisa)[0] ).subscribe(
      ( res: PaisType[] ) => {
         this.paises = res,
         this.errorMsg = false;
      },
      (error) => {
        this.errorMsg = true
      }
    );


  }

  public recebeOnDebounce(search: string){

    //criar sugestões aqui
    this.paisService.pesquisarPais(search).subscribe(
      ( res ) => this.paisesSugeridos = res.splice(0,3),
      ( error ) => {
        this.errorMsg = false;
      }
    );

  }

  public pesquisaSugerida(search: string){
    //criar sugestões aqui
    this.pesquisa = search;
    this.paisService.pesquisarPais( Object.values(this.pesquisa)[0] ).subscribe(
      ( res: PaisType[] ) => {
         this.paises = res,
         this.errorMsg = false;
         this.paisesSugeridos = [];
      },
      (error) => {
        this.errorMsg = true
      }
    );
  }


}
