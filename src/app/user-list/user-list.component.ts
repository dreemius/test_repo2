import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service'
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList: User[];
  selectedItems: User[] = [];
  selectedUser: any;

  username: string;
  name: string;
  role: string;

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsers();
  }

  search(query: string) {
    this.usersList = this.usersService.searchUsers(query);
  }

  sort(direction: string) {
    this.usersList = this.usersService.sortUsers(direction);
  }

  selectItem(items: any) {
    this.selectedItems = [];
    items.forEach(element => {
      this.selectedItems.push(element.value);
    });
  }

  addItem() {
    const id = Math.floor((Math.random() * 6) + 10);
    this.usersList.unshift({
      id: id,
      username: this.username,
      name: this.name,
      email: "",
      role: this.role,
      phone: "",
      website: ""
    })
  }

  deleteItem() {
    this.selectedItems.forEach(selected => {
      this.usersList = this.usersList.filter(user => user.id !== selected.id)
    })
  }


}
