import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent implements OnInit{

  status: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  tarefas = [
    { id: 1, descricao: "Tarefa de React", status: false },
    { id: 2, descricao: "Tarefa de Angular", status: false },
    { id: 3, descricao: "Tarefa de Java", status: true },
    { id: 4, descricao: "Tarefa de Python", status: false },
    { id: 5, descricao: "Tarefa de Typescript", status: true },
    { id: 6, descricao: "Tarefa de Javascript", status: true },
  ];
 
  alternarStatus(tarefa: { status: boolean; }): void {
    tarefa.status = !tarefa.status;
  }
   
}

