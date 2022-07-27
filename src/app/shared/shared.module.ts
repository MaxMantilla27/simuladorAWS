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


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MigaPanComponent } from './miga-pan/miga-pan.component';
import { LinkButtonComponent } from './buttons/link-button/link-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DefaultButtonComponent,
    MigaPanComponent,
    LinkButtonComponent,
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

  ]
})
export class SharedModule { }
