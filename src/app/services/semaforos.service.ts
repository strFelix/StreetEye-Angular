import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISemaforo } from '../models/ISemaforo';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SemaforosService {

  private URL: string = "http://localhost:3000/semaforos";
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  buscarTodos(): Observable<ISemaforo[]>{
    return this.http.get<ISemaforo[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  cadastrar(semaforo: ISemaforo): Observable<ISemaforo>{
    return this.http.post<ISemaforo>(this.URL, semaforo).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
}
  
  exibirErro(e:any): Observable<any> {
    this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação! Requisição sem reposta.', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void {
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }
}
