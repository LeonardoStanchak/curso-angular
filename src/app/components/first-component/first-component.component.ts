import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit { 

  name:string = 'Leonardo';
  inicio:string = 'Estudio DarkTatto'
  age:number = 30;
  job='Programador';
  brinca=['Basquete', 'Rpg', 'Lol']

  constructor() { }

  ngOnInit(): void {
  }

}
