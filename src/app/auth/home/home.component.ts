import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Subject,takeUntil } from 'rxjs';
import { AvatarDTO } from 'src/app/Models/AvatarDTO';
import { RegistroAwsExamenDTO } from 'src/app/Models/ExamenDTO';
import { AvatarService } from 'src/app/shared/Services/Avatar/avatar.service';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';
import { SessionStorageService } from 'src/app/shared/Services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myChart:any;
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

  public token: boolean = this._SessionStorageService.validateTokken();

  ngOnInit(): void {

    if (this.token) {
      this.ObtenerAvatar();
      this.ObtenerMejorExamenPorUsuario();
      this.ObtenerNivelUsuario();
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
      }

    })
  }

}
