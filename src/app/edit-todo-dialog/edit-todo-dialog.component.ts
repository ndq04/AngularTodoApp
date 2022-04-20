import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss'],
})
export class EditTodoDialogComponent implements OnInit {
  constructor(
    public diglogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  ngOnInit(): void {}

  close() {
    this.diglogRef.close();
  }
  onFormSubmit(form: NgForm) {
    if (form.invalid || !form.value.text.trim()) return;
    // console.log(form.value);
    // console.log(this.todo);

    const updatedTodo = {
      ...form.value,
    };
    // console.log(updatedTodo);

    this.diglogRef.close(updatedTodo);
  }
}
