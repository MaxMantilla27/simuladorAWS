import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrenamiento-respuesta-pregunta',
  templateUrl: './entrenamiento-respuesta-pregunta.component.html',
  styleUrls: ['./entrenamiento-respuesta-pregunta.component.scss']
})
export class EntrenamientoRespuestaPreguntaComponent implements OnInit {

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
