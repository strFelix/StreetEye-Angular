import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISemaforo } from 'src/app/models/ISemaforo';
import { SemaforosService } from 'src/app/services/semaforos.service';

@Component({
  selector: 'app-cadastrarsemaforos',
  templateUrl: './cadastrarsemaforos.component.html',
  styleUrls: ['./cadastrarsemaforos.component.css']
})
export class CadastrarsemaforosComponent {

  constructor(private SemaforosService: SemaforosService, private router: Router) {
  } 
  
  semaforo : ISemaforo = {
    nome: "",
    latitude: "",
    longitude: "",
    status: "Online"
   };

  salvarSemaforo(): void {
    this.SemaforosService.cadastrar(this.semaforo).subscribe(retorno => {
      this.SemaforosService.exibirMensagem(
        'Sistema',
        `${this.semaforo.nome} foi cadastrado com sucesso.`,
        'toast-success'
      );
      this.router.navigate(['./semaforos'])
      
    });
  }
}
