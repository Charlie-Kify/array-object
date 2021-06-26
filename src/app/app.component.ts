import { Component, OnInit } from '@angular/core';
import { IUser } from './Interfaces/user/user.intrface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: IUser[] = [];

  constructor(){}

  ngOnInit(){
    this.users = [
      {
        name: 'Juan',
        lastname: 'Perez',
        age: 34
      },
      {
        name: 'Luis',
        lastname: 'Fernandez',
        age: 35
      },
      {
        name: 'Ariely',
        lastname: 'Torrres',
        age: 45
      }
    ]
  }

  onDeleteUser(index:number){
    this.users.splice(index,1);
  }
  
}
