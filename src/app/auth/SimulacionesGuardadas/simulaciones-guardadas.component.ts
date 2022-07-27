import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulaciones-guardadas',
  templateUrl: './simulaciones-guardadas.component.html',
  styleUrls: ['./simulaciones-guardadas.component.scss']
})
export class SimulacionesGuardadasComponent implements OnInit {

  constructor() { }
  public migaPan = [
    {
      titulo: 'Simulador AWS',
      urlWeb: '/',
    },
    {
      titulo: 'Simulaciones guardadas',
      urlWeb: '/SimulacionesGuardadas',
    },
  ];
  ngOnInit(): void {
  }

}
