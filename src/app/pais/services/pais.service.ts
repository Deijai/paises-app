import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { PaisType } from '../interfaces/pais.interface';


const url = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) {
   }

  pesquisarPais( search: string ): Observable<PaisType[]> {
    return this.http.get<PaisType[]>(`${url}/name/${search}`);
  }

  pesquisarPorCapital( search: string ): Observable<PaisType[]> {
    return this.http.get<PaisType[]>(`${url}/capital/${search}`);
  }

  pesquisarPaisById(search: string): Observable<PaisType> {
    return this.http.get<PaisType>(`${url}/alpha/${search}`);
  }

  pesquisarPaisByRegiao(search: string): Observable<PaisType[]> {
    return this.http.get<PaisType[]>(`${url}/region/${search}`);
  }
}
