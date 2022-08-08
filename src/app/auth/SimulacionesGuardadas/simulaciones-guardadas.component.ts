import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-simulaciones-guardadas',
  templateUrl: './simulaciones-guardadas.component.html',
  styleUrls: ['./simulaciones-guardadas.component.scss']
})
export class SimulacionesGuardadasComponent implements OnInit {

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
      titulo: 'Simulaciones guardadas',
      urlWeb: '/SimulacionesGuardadas',
    },
  ];
  public SimulacionesIncompletas:any
  ngOnInit(): void {
    this.ListaExamenesIncompletos()
  }
  ListaExamenesIncompletos(){
    this._ExamenService.ListaExamenesIncompletos().subscribe({
      next:(x)=>{
        console.log(x)
        this.SimulacionesIncompletas=x
      }
    })
  }

}
