import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados-simulaciones',
  templateUrl: './resultados-simulaciones.component.html',
  styleUrls: ['./resultados-simulaciones.component.scss']
})
export class ResultadosSimulacionesComponent implements OnInit {

  constructor() { }
  public migaPan = [
    {
      titulo: 'Simulador AWS',
      urlWeb: '/',
    },
    {
      titulo: 'Resultados de simulaciones',
      urlWeb: '/ResultadosSimulaciones',
    },
  ];
  ngOnInit(): void {
  }

}
