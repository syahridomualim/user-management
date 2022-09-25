import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { User } from 'src/app/model/user.interface';
import { UserService } from 'src/app/service/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  private subscriptions = new SubSink();
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      nama: new FormControl(null, Validators.required),
      noHP: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      alamat: this.fb.array([
        fb.control('', Validators.required)
      ])
    })
  }

  ngOnInit(): void {
  }

  createUser(user: User) {
    console.log(this.userForm.value);
    this.subscriptions.add(
      this.userService.addUser(this.userForm.value).subscribe(
        response => {
          this.router.navigateByUrl('/home')
        }, 
        error => {

        }
      )
    )
  }



  addAlamat() {
    this.alamat.push(this.fb.control(''));
  }

  removeAlamat(i: number) {
    this.alamat.removeAt(i);
  }

  get alamat(): FormArray {
    return this.userForm.get('alamat') as FormArray;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
