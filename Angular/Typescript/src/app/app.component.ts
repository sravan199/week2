import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
   stdd:StudentDetails[] =[
    {firstName :'sravan',lastName:'guduru',id:2210415417,section:2,year:2},
    {firstName :'Rahul',lastName:'lagitty',id:2210415411,section:2,year:1},
    {firstName :'sricaran',lastName:'Gana',id:2210415430,section:1,year:2}]                     
 }

export interface StudentDetails
{
firstName:string;
lastName:string;
id:number;
section :number;
year :number;
};



