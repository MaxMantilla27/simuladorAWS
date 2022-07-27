export interface RegistroAwsExamenDetalleDTO{
  id:number,
  idSimuladorAwsExamen:number,
  idSimuladorAwsDominio:number,
  idSimuladorAwsTarea?:number,
  idSimuladorAwsPregunta:number,
  ejecutado:boolean,
  idSimuladorAwsPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
