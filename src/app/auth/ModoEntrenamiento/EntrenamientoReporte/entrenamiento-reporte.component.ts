import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrenamiento-reporte',
  templateUrl: './entrenamiento-reporte.component.html',
  styleUrls: ['./entrenamiento-reporte.component.scss']
})
export class EntrenamientoReporteComponent implements OnInit {

  constructor() { }
  public migaPan = [
    {
      titulo: 'Simulador AWS',
      urlWeb: '/',
    },
    {
      titulo: 'Modo entrenamiento',
      urlWeb: '/ModoEntrenamiento',
    },
  ];
  ngOnInit(): void {
  }

}
