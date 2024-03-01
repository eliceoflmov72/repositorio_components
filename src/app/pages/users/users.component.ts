import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  public NombreUsuario: string = 'ELICIO';
  public users: { id: number, name: string }[] = [
    { id: 1, name: 'Juan' },
    { id: 2, name: 'María' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Ana' },
    { id: 5, name: 'Luis' }
  ];
}
