import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }
  @Input() Puntos=0;
  //Dona
  public doughnutChartOptions: ChartConfiguration['options'] = {};
  public doughnutChartData: ChartData<'doughnut',number[]> = {
    labels:["",""],
    datasets: [{
      data: [ this.Puntos,100-this.Puntos],
      backgroundColor: [
          '#00C356',
          '#E8E8E5'
      ],
    }]
  };
  public doughnutChartType: ChartType = 'doughnut';
  ngOnInit(): void {
    if(this.Puntos>=0){
      this.ValoresChart()
    }
    if(this.Puntos==0){
      this.ValoresChartInicio()
    }
  }
  ValoresChart(){
    //Opciones
    this.doughnutChartOptions={
      responsive: true,
      plugins: {
      legend: {
        display: false,
        },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      }
    }
    //Datos
    this.doughnutChartData={
      labels:["",""],
      datasets: [{
        data: [ this.Puntos,100-this.Puntos],
        backgroundColor: [
          '#00C356',
          '#E8E8E5'
        ],
      }]
    }
  }

  ValoresChartInicio(){
    //Opciones
    this.doughnutChartOptions={
      responsive: true,
      plugins: {
      legend: {
        display: false,
        },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      }
    }
    //Datos
    this.doughnutChartData={
      labels:["",""],
      datasets: [{
        data: [ 0,100],
        backgroundColor: [
          '#00C356',
          '#E8E8E5'
        ],
      }]
    }
  }
}
