import { RegistroAwsExamenDetalleDTO } from "./ExamenDetalleDTO";

export interface RegistroAwsExamenDTO{
  id:number,
  idSimuladorAwsModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  idSimuladorAwsTarea?:number,
  idSimuladorAwsDominio:number
}
export interface RegistroAwsExamenRespuestaDTO{
  id:number,
  idSimuladorAwsModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  respuestaDetalle: Array<RegistroAwsExamenDetalleDTO>,
  idSimuladorTipoRespuesta:number
}
