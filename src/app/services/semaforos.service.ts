import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISemaforo } from '../models/ISemaforo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemaforosService {

  private URL: string = "http://localhost:3000/semaforos";
  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<ISemaforo[]>{
    return this.http.get<ISemaforo[]>(this.URL);
    
    // .pipe(
    //   map(retorno => retorno),
    //   catchError(erro => this.exibirErro(erro))
    // );
  }
}
