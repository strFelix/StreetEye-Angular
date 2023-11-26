import { Component } from '@angular/core';
import { ISemaforo } from 'src/app/models/ISemaforo';
import { SemaforosService } from 'src/app/services/semaforos.service';

@Component({
  selector: 'app-listarsemaforos',
  templateUrl: './listarsemaforos.component.html',
  styleUrls: ['./listarsemaforos.component.css']
})
export class ListarsemaforosComponent {
    listaSemaforos: ISemaforo[] = [];

    constructor(private SemaforosService: SemaforosService) {}

    ngOnInit(): void {
      this.carregarSemaforos();
    }

    carregarSemaforos(): void{
      this.SemaforosService.buscarTodos().subscribe(retorno => {
        this.listaSemaforos = retorno;
      })
    }
}
