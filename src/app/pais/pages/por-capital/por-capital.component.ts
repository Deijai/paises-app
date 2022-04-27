import { Component, OnInit } from '@angular/core';
import { PaisType } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  public paises: PaisType[] = [];
  public errorMsg: boolean = false;
  public pesquisa: string = '';
  public placeholder = 'Por Capital';

  ngOnInit(): void {}

  constructor(private paisService: PaisService) {}

  public pesquisarRecebe(pesquisa: any) {
    this.pesquisa = pesquisa;
    this.paisService.pesquisarPorCapital(Object.values(this.pesquisa)[0]).subscribe(
      (res: PaisType[]) => {
        console.log(res);

        (this.paises = res), (this.errorMsg = false);
      },
      (error) => {
        this.errorMsg = true;
      }
    );
  }

  public recebeOnDebounce(event: any){
    this.errorMsg = false;
    //criar sugestões aqui

  }

}
