import { Component, computed, effect, inject, signal } from '@angular/core';
import { UserService } from '../user-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
})
export class Users {
  // users: any;
  //   searchText = '';
  //  private userService =  inject(UserService);

  //   ngOnInit() {
  //     this.userService.getUserDate().subscribe((data: any) => {
  //       console.log(data);
  //       this.users = data;
  //       console.log(this.users);
  //     });
  //   }

  users = signal<any[]>([]);
  searchText = signal('');

  private userService = inject(UserService);

  constructor() {
    effect(() => {
      this.userService.getUserDate().subscribe((data: any) => {
        this.users.set(data);
      });
    });
  }

  filteredUsers = computed(() => {
    const text = this.searchText().toLocaleLowerCase();
    if (!text) {
      return [];
    }

    return this.users().filter((user: any) => {
      return user.name.toLocaleLowerCase().includes(text);
    });
  });


}
