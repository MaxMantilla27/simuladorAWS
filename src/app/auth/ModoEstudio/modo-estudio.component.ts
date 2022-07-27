import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroAwsExamenDTO } from 'src/app/Models/ExamenDTO';
import { DominioService } from 'src/app/shared/Services/Dominio/dominio.service';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-modo-estudio',
  templateUrl: './modo-estudio.component.html',
  styleUrls: ['./modo-estudio.component.scss']
})
export class ModoEstudioComponent implements OnInit {

  constructor(
    private _router: Router,
    private _ExamenService:ExamenService,
    private _DominioService: DominioService
  ) { }

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
  public RegistrarExamenEnvio:RegistroAwsExamenDTO={
    id:0,
    idSimuladorAwsModo:0,
    nombreExamen:'',
    tiempo:0,
    idSimuladorAwsDominio:0
  }
  public Dominio:any;
  public IdExamen=0;
  public userForm :FormGroup=new FormGroup({
    NombreSimulacion: new FormControl('',Validators.required),
  })
  public DominioSeleccionado=0;
  ngOnInit(): void {
    this.ListaDominioCombo();
  }

  RegistrarExamen(){
    if(this.userForm.valid){
      this.RegistrarExamenEnvio.id=0,
      this.RegistrarExamenEnvio.idSimuladorAwsModo=1,
      this.RegistrarExamenEnvio.nombreExamen=this.userForm.get('NombreSimulacion')?.value;
      this.RegistrarExamenEnvio.tiempo=0,
      this.RegistrarExamenEnvio.idSimuladorAwsDominio=4;
      console.log(this.RegistrarExamenEnvio)
      this._ExamenService.Registrar(this.RegistrarExamenEnvio).subscribe({
        next:(x)=>{
          console.log(x)
          this.IdExamen=x.id
          this._router.navigate(['/ModoEstudio/EstudioPregunta/'+this.IdExamen]);
        }
      })
    }
  }
  ListaDominioCombo(){
    this._DominioService.ListaDominioCombo().subscribe({
      next:(x)=>{
        this.Dominio=x;
      }
    })

  }
}
