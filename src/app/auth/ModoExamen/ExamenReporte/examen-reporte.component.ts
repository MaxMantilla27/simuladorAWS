import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen-reporte',
  templateUrl: './examen-reporte.component.html',
  styleUrls: ['./examen-reporte.component.scss']
})
export class ExamenReporteComponent implements OnInit {

  constructor() { }
  public migaPan = [
    {
      titulo: 'Simulador AWS',
      urlWeb: '/',
    },
    {
      titulo: 'Modo examen',
      urlWeb: '/ModoExamen',
    },
  ];
  ngOnInit(): void {
  }

}
