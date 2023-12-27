import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  TodayDate = new Date();
  a : number= 1.23456789;
  b: number = 0.98;
  c : number = 1.789999;
  name : string = "Information Technology";
  fruits : any =["Apple","Banana","Orange","Mango","Berries","kiwi","Grapes"];
  value :any = {
    name:'sasi',
    age:20,
    address:{
      No:33,
      strName:'GandhiNagar',
      District:'Chennai',
      Pincode:600012
    }
  }
  array : string[] =["Jan","Feb","Mar","Apr","May","Jun","Jul"];
  arr : any =[1, 5, 7, 2, 8, 3, 10];
}
  