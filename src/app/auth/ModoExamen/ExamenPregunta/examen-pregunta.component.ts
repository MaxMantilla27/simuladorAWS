import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroAwsExamenDetalleDTO } from 'src/app/Models/ExamenDetalleDTO';
import { RegistroAwsExamenRespuestaDTO } from 'src/app/Models/ExamenDTO';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-examen-pregunta',
  templateUrl: './examen-pregunta.component.html',
  styleUrls: ['./examen-pregunta.component.scss']
})
export class ExamenPreguntaComponent implements OnInit {

  constructor(
    private _router: Router,
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
  public IdExamen=0;
  public DatosExamen:any;
  public ListaPreguntas:any;
  public NombreDominio='';
  public CantidadTotalPreguntas=0;
  public ContadorPreguntaActual=0;
  public ContadorPregunta=0;
  public ContadorAux=0;
  public valPregunta=false
  public TiempoSegundo=0;
  public Hora=0;
  public Minuto=0;
  public Segundo=0;
  public HoraMostrar='';
  public MinutoMostrar='';
  public SegundoMostrar='';
  public RegistroEnvioRespuesta:RegistroAwsExamenRespuestaDTO={
    id:0,
    idSimuladorAwsModo:0,
    nombreExamen:'',
    tiempo:0,
    idAspNetUsers:'',
    usuario:'',
    estadoExamen:0,
    puntaje:0,
    desempenio:0,
    percentil:0,
    respuestaDetalle: [],
    idSimuladorTipoRespuesta:0
  }
  public DetalleRespuestaEnvio:RegistroAwsExamenDetalleDTO={
    id:0,
    idSimuladorAwsExamen:0,
    idSimuladorAwsDominio:0,
    idSimuladorAwsTarea:0,
    idSimuladorAwsPregunta:0,
    ejecutado:false,
    idSimuladorAwsPreguntaRespuesta:0,
    puntaje:0,
    idAspNetUsers:'',
    usuario:''
  }
  /* public DetalleRespuestaEnvio:any */
  public Retroalimentacion= false;
  public RespuestaCorrecta=false;
  public RespuestaMarcada=false;

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
        this.ListaPreguntas=x.listaPreguntas;
        if(this.ListaPreguntas.length==0){
          this._router.navigate(['/ModoExamen/ExamenReporte/'+this.IdExamen]);
        }
        else{
          this.CantidadTotalPreguntas=x.preguntasPendientes+x.preguntasRespondidas;
          this.ContadorPreguntaActual=this.ContadorPregunta+1+x.preguntasRespondidas;
          this.NombreDominio=this.ListaPreguntas[0].dominioNombre;
          this.ContadorAux=this.CantidadTotalPreguntas-1;
          this.TiempoSegundo=x.tiempo;
          this.Cronometro(this.TiempoSegundo);
        }


      }
    })
  }
  chageRadio(value: number,i: number, j: number) {
    this.RespuestaMarcada=false;
      if (value == 0 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==1) {
        this.ListaPreguntas[i].pregunta.respuesta.forEach((x:any)=>{
          x.respuestaSelecionada=0
        })
        this.RespuestaMarcada=true;
        return 1;
      }
      if (value == 0 && this.ListaPreguntas[i].pregunta.respuesta[j] && this.ListaPreguntas[i].pregunta.idSimuladorTipoRespuesta==5) {
        this.RespuestaMarcada=true
        return 1;
      }
      this.RespuestaMarcada=false;
      return 0;
}
RegresarMenu(i:number){
  this.EnviarRespuesta(i);
  this.Retroalimentacion=false;
  this._router.navigate(['/ModoExamen']);
}
EnviarRespuesta(i:number){
  this.RegistroEnvioRespuesta.respuestaDetalle=[],
  /* this.DetalleRespuestaEnvio=undefined, */
  this.RegistroEnvioRespuesta.id=this.IdExamen,
  this.RegistroEnvioRespuesta.idSimuladorAwsModo=3,
  this.RegistroEnvioRespuesta.nombreExamen='',
  this.RegistroEnvioRespuesta.tiempo=this.TiempoSegundo,
  this.RegistroEnvioRespuesta.idAspNetUsers='',
  this.RegistroEnvioRespuesta.usuario='',
  this.RegistroEnvioRespuesta.puntaje=0,
  this.RegistroEnvioRespuesta.desempenio=0,
  this.RegistroEnvioRespuesta.percentil=0,
  this.RegistroEnvioRespuesta.idSimuladorTipoRespuesta=1,
  this.ListaPreguntas[i].pregunta.respuesta.forEach((x:any)=>{
    if(x.respuestaSelecionada==1){
      this.DetalleRespuestaEnvio.idSimuladorAwsPreguntaRespuesta=x.id;
      this.DetalleRespuestaEnvio.id=this.ListaPreguntas[i].id;
      this.DetalleRespuestaEnvio.idSimuladorAwsExamen=0;
      this.DetalleRespuestaEnvio.idSimuladorAwsDominio=0;
      this.DetalleRespuestaEnvio.idSimuladorAwsTarea=0;
      this.DetalleRespuestaEnvio.idSimuladorAwsPregunta=this.ListaPreguntas[i].idSimuladorAwsPregunta;
      this.DetalleRespuestaEnvio.ejecutado=false;
      this.DetalleRespuestaEnvio.puntaje=0;
      this.DetalleRespuestaEnvio.idAspNetUsers='';
      this.DetalleRespuestaEnvio.usuario=''
      if(this.ContadorPreguntaActual<=this.ContadorAux){
        this.RegistroEnvioRespuesta.estadoExamen=2
      }
      else{
        this.RegistroEnvioRespuesta.estadoExamen=3
      }
      this.RegistroEnvioRespuesta.respuestaDetalle.push(this.DetalleRespuestaEnvio)
    }

  })
  console.log(this.RegistroEnvioRespuesta)
  this._ExamenService.RegistrarRespuestaSeleccion(this.RegistroEnvioRespuesta).subscribe({
    next:(x)=>{
      this.RespuestaCorrecta=x
    },
    complete:()=>{
      this.Retroalimentacion=true
    },
  })
  this.RespuestaMarcada=false
}
 SalirRetroalimentacion(){
    this._router.navigate(['/ModoExamen']);
    this.ContadorPregunta=this.ContadorPregunta+1;
  }
  SiguientePregunta(){
    this.ContadorPregunta=this.ContadorPregunta+1;
    this.ContadorPreguntaActual=this.ContadorPreguntaActual+1;
    this.Retroalimentacion=false;
    if (this.ContadorPreguntaActual>this.CantidadTotalPreguntas){
      this._router.navigate(['/ModoExamen/ExamenReporte/'+this.IdExamen]);
    }
  }
  Cronometro(TiempoSegundo:number){
    TiempoSegundo=TiempoSegundo+1;
    this.Hora = Math.floor(TiempoSegundo / 3600);
    this.HoraMostrar = (this.Hora < 10) ? '0' + this.Hora : this.Hora.toString();
    this.Minuto = Math.floor((TiempoSegundo / 60) % 60);
    this.MinutoMostrar = (this.Minuto < 10) ? '0' + this.Minuto : this.Minuto.toString();
    this.Segundo = TiempoSegundo % 60;
    this.SegundoMostrar = (this.Segundo < 10) ? '0' + this.Segundo : this.Segundo.toString();
    setTimeout(()=>{
      this.Cronometro(TiempoSegundo);
    },1000)

  }
}
