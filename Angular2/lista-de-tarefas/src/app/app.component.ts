import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TarefaComponent } from './component/tarefa/tarefa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-tarefas';
}
