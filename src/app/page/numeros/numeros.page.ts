import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumerosPageModule } from './numeros.module';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  numero=0;
  constructor(private publicRouter:Router) { }
  ngOnInit() {
  }
  Home(){
    this.publicRouter.navigate(['/home']);
  }

  Seleccionar(numero){
    this.numero=numero;
  }
}
