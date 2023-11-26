import { Component } from '@angular/core';
import { ISemaforo } from 'src/app/models/ISemaforo';

@Component({
  selector: 'app-listarsemaforos',
  templateUrl: './listarsemaforos.component.html',
  styleUrls: ['./listarsemaforos.component.css']
})
export class ListarsemaforosComponent {
    listaSemaforos: ISemaforo[] = [];
}
