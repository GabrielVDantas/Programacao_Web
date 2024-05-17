import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSuperiorComponent } from './component/menu-superior/menu-superior.component';
import { ListaUsuarioComponent } from './component/lista-usuario/lista-usuario.component';
import { ApoliceComponent } from './component/apolice/apolice.component';
import { PaginaNaoEncontradaComponent } from './component/pagina-nao-encontrada/pagina-nao-encontrada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuSuperiorComponent, ListaUsuarioComponent, ApoliceComponent, PaginaNaoEncontradaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-roteamento';
}
