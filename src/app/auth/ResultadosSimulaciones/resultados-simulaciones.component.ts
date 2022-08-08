import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-resultados-simulaciones',
  templateUrl: './resultados-simulaciones.component.html',
  styleUrls: ['./resultados-simulaciones.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ResultadosSimulacionesComponent implements OnInit {

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
      titulo: 'Resultados de simulaciones',
      urlWeb: '/ResultadosSimulaciones',
    },
  ];
  public SimulacionesCompletadas:any
  ngOnInit(): void {
    this.ListaExamenesConcluidos()
  }
  ListaExamenesConcluidos(){
    this._ExamenService.ListaExamenesConcluidos().subscribe({
      next:(x)=>{
        console.log(x)
        this.SimulacionesCompletadas=x
      }
    })
  }
}
