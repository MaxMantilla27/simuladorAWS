import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }
  @Input() ExamenPorIntento:any;
  public lineChartOptions: ChartConfiguration['options'] = {};
  public lineChartType: ChartType = 'line';
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        label: 'Puntaje promedio global',
        backgroundColor: 'transparent',
        borderColor: '#00C356',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00C356',
        fill: 'origin',
      },
      {
        data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        label: 'Tu puntaje',
        backgroundColor: 'transparent',
        borderColor: '#0C9AFE',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0C9AFE',
        fill: 'origin',
      },

    ],
    labels: [ '1', '2', '3', '4', '5', '6', '7','8', '9','10' ]
  };
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.ExamenPorIntento)
    if(this.ExamenPorIntento.Intento1!=0 ||
        this.ExamenPorIntento.Intento2!=0 ||
        this.ExamenPorIntento.Intento3!=0 ||
        this.ExamenPorIntento.Intento4!=0 ||
        this.ExamenPorIntento.Intento5!=0 ||
        this.ExamenPorIntento.Intento6!=0 ||
        this.ExamenPorIntento.Intento7!=0 ||
        this.ExamenPorIntento.Intento8!=0 ||
        this.ExamenPorIntento.Intento9!=0 ||
        this.ExamenPorIntento.Intento10!=0 ){
      this.ValoresChart()
    }
    if(this.ExamenPorIntento.Intento1==0 &&
      this.ExamenPorIntento.Intento2==0 &&
      this.ExamenPorIntento.Intento3==0 &&
      this.ExamenPorIntento.Intento4==0 &&
      this.ExamenPorIntento.Intento5==0 &&
      this.ExamenPorIntento.Intento6==0 &&
      this.ExamenPorIntento.Intento7==0 &&
      this.ExamenPorIntento.Intento8==0 &&
      this.ExamenPorIntento.Intento9==0 &&
      this.ExamenPorIntento.Intento10==0 ){
      this.ValoresChartInicio()
    }
  }
  ngOnInit(): void {
  }

  ValoresChart(){
    //Opciones
    this.lineChartOptions={
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        x: {},
        'y-axis-0':
          {
            position: 'left',
          },
        'y-axis-1': {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
        }
      },
    }
    //Datos
    this.lineChartData={
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ,20,34,60],
          label: 'Puntaje promedio global',
          backgroundColor: 'transparent',
          borderColor: '#00C356',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00C356',
          fill: 'origin',
        },
        {
          data: [ this.ExamenPorIntento.Intento1,
                  this.ExamenPorIntento.Intento2,
                  this.ExamenPorIntento.Intento3,
                  this.ExamenPorIntento.Intento4,
                  this.ExamenPorIntento.Intento5,
                  this.ExamenPorIntento.Intento6,
                  this.ExamenPorIntento.Intento7,
                  this.ExamenPorIntento.Intento8,
                  this.ExamenPorIntento.Intento9,
                  this.ExamenPorIntento.Intento10],
          label: 'Tu puntaje',
          backgroundColor: 'transparent',
          borderColor: '#0C9AFE',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#0C9AFE',
          fill: 'origin',
        },

      ],
      labels: [ '1', '2', '3', '4', '5', '6', '7','8', '9','10' ]
    }
  }
  ValoresChartInicio(){
    //Opciones
    this.lineChartOptions={
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        x: {},
        'y-axis-0':
          {
            position: 'left',
          },
        'y-axis-1': {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
        }
      },
    }
    //Datos
    this.lineChartData={
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ,20,34,60],
          label: 'Puntaje promedio global',
          backgroundColor: 'transparent',
          borderColor: '#00C356',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00C356',
          fill: 'origin',
        },
        {
          data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          label: 'Tu puntaje',
          backgroundColor: 'transparent',
          borderColor: '#0C9AFE',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#0C9AFE',
          fill: 'origin',
        },

      ],
      labels: [ '1', '2', '3', '4', '5', '6', '7','8', '9','10' ]
    }
  }
}
