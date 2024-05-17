import { Routes } from '@angular/router';
import { ApoliceComponent } from './component/apolice/apolice.component';
import { ListaUsuarioComponent } from './component/lista-usuario/lista-usuario.component';
import { MenuSuperiorComponent } from './component/menu-superior/menu-superior.component';
import { PaginaNaoEncontradaComponent } from './component/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './component/tela-pai/tela-pai.component';
import { TelaFilha1Component } from './component/tela-pai/tela-filha1/tela-filha1.component';
import { TelaFilha2Component } from './component/tela-pai/tela-filha2/tela-filha2.component';

export const routes: Routes = [
    { path: '', redirectTo: "/apolice", pathMatch: "full" },
    { path: "/apolice",  component: ApoliceComponent },
    { path: "lista-usuario", component: ListaUsuarioComponent },
    { path: "menu-superior", component: MenuSuperiorComponent },
    { path: 'tela-pai', component: TelaPaiComponent, children: [
        { path: "tela-filha1", component: TelaFilha1Component},
        { path: "tela-filha2", component: TelaFilha2Component},
    ] },
    { path: '**', component: PaginaNaoEncontradaComponent },
];
