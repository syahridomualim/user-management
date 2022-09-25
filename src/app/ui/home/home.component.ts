import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.interface';
import { UserService } from 'src/app/service/user.service';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptions = new SubSink();
  users : User[] | undefined;
  isVisible : boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.subscriptions.add(
      this.userService.getUsers().subscribe(
        response => {
          this.users = response.data.users
          if(!this.users) {
            this.isVisible = true;
          }
        }
      )
    )
  }

  getUserByName(query: string) {
    this.subscriptions.add(
      this.userService.getUserByName(query).subscribe(
        response => {
          this.users = response.data.users
          if(!this.users) {
            this.isVisible = true;
          }
        }, err => {
          this.getUsers()
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
