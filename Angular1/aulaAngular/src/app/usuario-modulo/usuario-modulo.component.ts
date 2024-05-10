import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-modulo',
  templateUrl: './usuario-modulo.component.html',
  styleUrl: './usuario-modulo.component.css'
})
export class UsuarioModuloComponent implements OnInit {
  titulo : string = "Lista de usuários";
  numero1 : number = 10;
  numero2 : number = 0;
  resultado : number = 0;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  somar() {
    this.resultado = this.numero1 + this.numero2;
  }

}
