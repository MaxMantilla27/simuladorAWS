import { Component, Input, OnInit, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  @Input() Puntos=0;
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {};
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ["",""],
    datasets: [ {
      data:[0,100] ,
      backgroundColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderWidth: 1,
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  ngOnInit(): void {
    if(this.Puntos!=0){
      this.ValoresChart()
    }
    if(this.Puntos==0){
      this.ValoresChartInicio()
    }
  }

  ValoresChart(){
    //Opciones
    this.pieChartOptions={
      responsive: true,
      plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
      }
    };
    //Datos
    this.pieChartData={
      labels: ["",""],
      datasets: [ {
      data:[this.Puntos,100-this.Puntos] ,
      backgroundColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderWidth: 1,
      }]
    }
  };

  ValoresChartInicio(){
    //Opciones
    this.pieChartOptions={
      responsive: true,
      plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
      }
    };
    //Datos
    this.pieChartData={
      labels: ["",""],
      datasets: [ {
        data:[0,100] ,
        backgroundColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderColor: [
        '#00C356',
        '#E8E8E5'
      ],
      borderWidth: 1,
      }]
    }
  };
}
