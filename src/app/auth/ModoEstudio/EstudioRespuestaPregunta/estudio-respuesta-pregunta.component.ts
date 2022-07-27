import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudio-respuesta-pregunta',
  templateUrl: './estudio-respuesta-pregunta.component.html',
  styleUrls: ['./estudio-respuesta-pregunta.component.scss']
})
export class EstudioRespuestaPreguntaComponent implements OnInit {

  constructor() { }
  public migaPan = [
    {
      titulo: 'Simulador AWS',
      urlWeb: '/',
    },
    {
      titulo: 'Modo estudio',
      urlWeb: '/ModoEstudio',
    },
  ];
  ngOnInit(): void {
  }

}
