import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SquarePipe } from 'src/app/pipes/square.pipe';


@NgModule({
  declarations: [

    SquarePipe,
    HomeComponent
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
