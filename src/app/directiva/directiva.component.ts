import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  
})
export class DirectivaComponent {

  listaCurso: string[]=['TypeScript', 'Javascript', 'Java SE', 'C#','Python'];
  habilitar: boolean=true;
  
  constructor(){

  }

}
