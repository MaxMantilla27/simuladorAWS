import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroAwsExamenDTO, RegistroAwsExamenRespuestaDTO } from 'src/app/Models/ExamenDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  public urlBase=environment.url_api+'Examen';
  constructor(private http: HttpClient) { }

  public Registrar(Json:RegistroAwsExamenDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/Registrar',Json);
  }
  public ObtenerExamenDetallePreguntaPorId(IdSimulacion:number):Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerExamenDetallePreguntaPorId/'+IdSimulacion);
  }

  public RegistrarRespuestaSeleccion(Json:RegistroAwsExamenRespuestaDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/RegistrarRespuestaSeleccion',Json);
  }
  public ObtenerExamenReporteResultadosPorId(IdExamen:number):Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerExamenReporteResultadosPorId/'+IdExamen);
  }
  public ObtenerMejorExamenPorUsuario(Json:RegistroAwsExamenDTO):Observable<any>{
    return this.http.post<any>(this.urlBase+'/ObtenerMejorExamenPorUsuario',Json);
  }
  public ObtenerNivelUsuario():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ObtenerNivelUsuario');
  }

}
