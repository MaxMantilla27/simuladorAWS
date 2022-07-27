import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen-respuesta-pregunta',
  templateUrl: './examen-respuesta-pregunta.component.html',
  styleUrls: ['./examen-respuesta-pregunta.component.scss']
})
export class ExamenRespuestaPreguntaComponent implements OnInit {

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
