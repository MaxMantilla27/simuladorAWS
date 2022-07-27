import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroAwsExamenDTO } from 'src/app/Models/ExamenDTO';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-modo-entrenamiento',
  templateUrl: './modo-entrenamiento.component.html',
  styleUrls: ['./modo-entrenamiento.component.scss']
})
export class ModoEntrenamientoComponent implements OnInit {

  constructor(
    private _router: Router,
    private _ExamenService:ExamenService
  ) { }
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
  public RegistrarExamenEnvio:RegistroAwsExamenDTO={
    id:0,
    idSimuladorAwsModo:0,
    nombreExamen:'',
    tiempo:0,
    idSimuladorAwsDominio:0
  }
  public IdExamen=0;
  public userForm :UntypedFormGroup=new UntypedFormGroup({
    NombreSimulacion: new UntypedFormControl('',Validators.required),
  })
  ngOnInit(): void {
  }
  RegistrarExamen(){
    if(this.userForm.valid){
      this.RegistrarExamenEnvio.id=0,
      this.RegistrarExamenEnvio.idSimuladorAwsModo=2,
      this.RegistrarExamenEnvio.nombreExamen=this.userForm.get('NombreSimulacion')?.value;
      this.RegistrarExamenEnvio.tiempo=0,
      this.RegistrarExamenEnvio.idSimuladorAwsDominio=0
      console.log(this.RegistrarExamenEnvio)
      this._ExamenService.Registrar(this.RegistrarExamenEnvio).subscribe({
        next:(x)=>{
          this.IdExamen=x.id
          this._router.navigate(['/ModoEntrenamiento/EntrenamientoPregunta/'+this.IdExamen]);
        }
      })
    }
  }
}
