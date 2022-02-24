import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
