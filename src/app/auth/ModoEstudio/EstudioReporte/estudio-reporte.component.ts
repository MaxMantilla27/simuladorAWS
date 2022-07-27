import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/shared/Services/Examen/examen.service';

@Component({
  selector: 'app-estudio-reporte',
  templateUrl: './estudio-reporte.component.html',
  styleUrls: ['./estudio-reporte.component.scss']
})
export class EstudioReporteComponent implements OnInit {

  constructor(
    private _ExamenService: ExamenService,
    private activatedRoute: ActivatedRoute,

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
  public DominioResultado:any;
  public Examen:any;
  public NombreExamen='';
  public IdExamen=0
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let auxParams = params["IdExamen"].split('-')
      this.IdExamen = auxParams[auxParams.length -1];
    })
    this.ObtenerExamenReporteResultadosPorId()
  }
  ObtenerExamenReporteResultadosPorId(){
    this._ExamenService.ObtenerExamenReporteResultadosPorId(this.IdExamen).subscribe({
      next:(x)=>{

        this.DominioResultado=x.dominioResultado[0];
        console.log(this.DominioResultado)
        this.Examen=x.examen;
        this.NombreExamen=x.examen.nombreExamen;
        console.log(this.Examen)

      }
    })
  }


}
