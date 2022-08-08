import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultButtonComponent } from './buttons/default-button/default-button.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MigaPanComponent } from './miga-pan/miga-pan.component';
import { LinkButtonComponent } from './buttons/link-button/link-button.component';
import { NgChartsModule } from 'ng2-charts';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PieComponent } from './Charts/Pie/pie.component';
import { DonaComponent } from './Charts/Dona/dona.component';
import { BarrasComponent } from './Charts/Barras/barras.component';
import { LineComponent } from './Charts/Line/line.component';
import { DonaPuntosComponent } from './Charts/DonaPuntos/dona-puntos.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DefaultButtonComponent,
    MigaPanComponent,
    LinkButtonComponent,
    PieComponent,
    DonaComponent,
    BarrasComponent,
    LineComponent,
    DonaPuntosComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    NgChartsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HeaderComponent,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MigaPanComponent,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    PieComponent,
    DonaComponent,
    BarrasComponent,
    LineComponent,
    DonaPuntosComponent
  ]
})
export class SharedModule { }
