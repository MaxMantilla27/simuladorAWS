import { Component, ElementRef, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subject,takeUntil } from 'rxjs';
import { AvatarDTO } from 'src/app/Models/AvatarDTO';
import { RegistroAwsExamenDTO } from 'src/app/Models/ExamenDTO';
import { AvatarService } from 'src/app/shared/Services/Avatar/avatar.service';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';
import { SessionStorageService } from 'src/app/shared/Services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HomeComponent implements OnInit {
  constructor(
    private _SessionStorageService:SessionStorageService,
    private _AvatarService:AvatarService,
    private _ExamenService:ExamenService,
    private elementRef: ElementRef
  ) { }
  private signal$ = new Subject();

  ngOnDestroy(): void {
    this.signal$.next(true)
    this.signal$.complete()
  }
  public NombreAlumno=''
  public resise=false;
  public NivelUsuario='';
  public SiguienteNivelUsuario=''

  public urlAvatar='';
  public Avatar: AvatarDTO = {
    accessories: '',
    clothes: '',
    clothes_Color: '',
    eyes: '',
    eyesbrow: '',
    facial_Hair: '',
    facial_Hair_Color: '',
    hair_Color: '',
    idAlumno: 0,
    idAspNetUsers: '',
    idAvatar: 0,
    mouth: '',
    skin: '',
    topC: ''
  };
  public MejorExamenEnvio:RegistroAwsExamenDTO={
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
    idSimuladorAwsTarea:0,
    idSimuladorAwsDominio:0
  }
  public ExamenesCompletados=0;
  public ExamenesActivos=0;
  public CantMEstudio=0;
  public CantMEntrenamiento=0;
  public CantMExamen=0;
  public ListaEstudio:any;
  public ListaEntrenamiento:any;
  public ListaExamen:any;
  public token: boolean = this._SessionStorageService.validateTokken();
  public DominioResultado:any;
  public Examen:any;
  public Puntos=0;
  public PuntosNivel=0;
  public ResultadoDominio1=0;
  public ResultadoDominio2=0;
  public ResultadoDominio3=0;
  public ResultadoDominio4=0;
  public ContadorEntrenamiento=0;
  public ResultadosPorDominio:any;

  ngOnInit(): void {

    if (this.token) {
      this.ObtenerAvatar();
      this.ObtenerMejorExamenPorUsuario();
      this.ObtenerNivelUsuario();
      this.ListaExamenesPorModo();
      this.ObtenerPromedioDominioPorModo();
    }
  }

  ObtenerAvatar() {
    this._AvatarService.ObtenerAvatar().pipe(takeUntil(this.signal$)).subscribe({
      next: (x) => {
        this.Avatar = x;
        this.NombreAlumno = x.nombres
        this.urlAvatar=this._AvatarService.GetUrlImagenAvatar(this.Avatar);
      },
    });
  }
  ObtenerMejorExamenPorUsuario(){
    this._ExamenService.ObtenerMejorExamenPorUsuario(this.MejorExamenEnvio).subscribe({
      next:(x)=>{
        console.log(x)
        this.DominioResultado=x.dominioResultado;
        this.ResultadoDominio1=Math.floor(x.dominioResultado[0].desempenio);
        this.ResultadoDominio2=Math.floor(x.dominioResultado[1].desempenio);
        this.ResultadoDominio3=Math.floor(x.dominioResultado[2].desempenio);
        this.ResultadoDominio4=Math.floor(x.dominioResultado[3].desempenio);
        this.Examen=x.examen;
        this.Puntos=Math.floor(x.examen.desempenio)
      },
      error:(e)=>{
        this.ExamenesCompletados=0
        this.ExamenesActivos=0
      }
    })
  }
  ObtenerNivelUsuario(){
    this._ExamenService.ObtenerNivelUsuario().subscribe({
      next:(x)=>{
        console.log(x)
        this.NivelUsuario=x.rango.nivel;
        this.SiguienteNivelUsuario=x.rango.siguienteNivel;
        this.PuntosNivel = x.puntosNivel;
        console.log(this.PuntosNivel)
      }
    })
  }
  ListaExamenesPorModo(){
    this._ExamenService.ListaExamenesPorModo(1).subscribe({
      next:(x)=>{
        this.ListaEstudio=x
        this.CantMEstudio=x.length;
        console.log(this.ListaEstudio)
      }
    });
    this._ExamenService.ListaExamenesPorModo(2).subscribe({
      next:(x)=>{
        this.ListaEntrenamiento=x
        console.log(this.ListaEntrenamiento)
        this.CantMEntrenamiento=x.length;
      }
    });
    this._ExamenService.ListaExamenesPorModo(3).subscribe({
      next:(x)=>{
        this.ListaExamen=x
        console.log(this.ListaExamen)
        this.ListaExamen.forEach((x:any)=>{
          if(x.estadoExamen=="Finalizado")
          this.ExamenesCompletados=this.ExamenesCompletados+1;
        })
        this.CantMExamen=x.length;
        this.ExamenesActivos=this.CantMExamen-this.ExamenesCompletados;

      }
    })
  }
  ObtenerPromedioDominioPorModo(){
    this._ExamenService.ObtenerPromedioDominioPorModo(1).subscribe({
      next:(x)=>{
        this.ResultadosPorDominio=x
      }
    })
  }

}
