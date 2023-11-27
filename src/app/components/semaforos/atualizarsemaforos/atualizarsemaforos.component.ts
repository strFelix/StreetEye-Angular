import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISemaforo } from 'src/app/models/ISemaforo';
import { SemaforosService } from 'src/app/services/semaforos.service';

@Component({
  selector: 'app-atualizarsemaforos',
  templateUrl: './atualizarsemaforos.component.html',
  styleUrls: ['./atualizarsemaforos.component.css']
})
export class AtualizarsemaforosComponent {
  semaforo: ISemaforo = {
    nome: "",
    latitude: "",
    longitude: "",
    status: "Online"
  }

  constructor(private semaforoService:SemaforosService, 
                      private router: Router, 
                      private activateRoute: ActivatedRoute)
  { 

  }

  ngOnInit(): void {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.semaforoService.buscarporId(id).subscribe(retorno => {
      this.semaforo = retorno;
    });
  }

  salvarSemaforo(): void {
    this.semaforoService.atualizar(this.semaforo).subscribe(retorno => {
      this.semaforoService.exibirMensagem(
        'Sistema',
        `${this.semaforo.nome} foi atualizado com sucesso.`,
        'toast-success'
      );
      this.router.navigate(['./semaforos'])
    });
  }
}
