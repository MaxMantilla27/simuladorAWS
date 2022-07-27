import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-examen-pregunta',
  templateUrl: './examen-pregunta.component.html',
  styleUrls: ['./examen-pregunta.component.scss']
})
export class ExamenPreguntaComponent implements OnInit {

  constructor(
    private _ExamenService:ExamenService,
    private activatedRoute: ActivatedRoute,

  ) { }
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
  public NombreDominio='';
  public IdExamen=0;
  public DatosExamen:any;
  public ListaPreguntas:any;
  public CantidadTotalPreguntas=0;
  public ContadorPreguntaActual=0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];
    })
    this.ObtenerExamenDetallePreguntaPorId();

  }

  ObtenerExamenDetallePreguntaPorId(){
    this._ExamenService.ObtenerExamenDetallePreguntaPorId(this.IdExamen).subscribe({
      next:(x)=>{
        console.log(x)
        this.DatosExamen=x;
        this.ListaPreguntas=x.listaPreguntas;
        this.CantidadTotalPreguntas=x.preguntasPendientes+x.preguntasRespondidas;
        this.ContadorPreguntaActual=x.preguntasRespondidas+1;
        this.NombreDominio=this.ListaPreguntas[0].dominioNombre;


      }
    })
  }
  RegresarMenu(){

  }
  EnviarRespuesta(){

  }
}
