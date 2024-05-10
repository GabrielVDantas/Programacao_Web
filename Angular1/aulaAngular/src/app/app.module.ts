import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioModuloComponent } from './usuario-modulo/usuario-modulo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    UsuarioModuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UsuarioModuloComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
