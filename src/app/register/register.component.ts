import { Component, OnInit } from '@angular/core';
import { User } from '../konstruktor/user';
import { LoginService } from 'src/app/service/login.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
    public users: User[] = [];
    public loginUser: User | undefined;

    user:User = new User();
    constructor(private loginService: LoginService, private toastr: ToastrService,){}

    ngOnInit(): void{}

    public userAdd()
    {
      console.log(this.user)
      this.loginService.addUser(this.user).subscribe(data=>{

        this.toastr.success("You successfully created account!");
      }, error=>this.toastr.error('name is taken!'))
    }
    // public onOpenModal( mode: string, user?: User): void {

    //   const container  = document.getElementById('main-container');
    //   const button = document.createElement('button');
    //   button.type = 'button';
    //   button.style.display = 'none';
    //   button.setAttribute('data-toggle', 'modal');

    //     if(mode === 'add'){
    //       button.setAttribute('data-target', '#addUserModal');
    //     }
    //    if(mode === 'edit'){
        
    //      this.editAnimal = animal;
    //       button.setAttribute('data-target', '#updateAnimalModal');
    //     }
    //     if(mode === 'delete'){
    //       this.deleteAnimal = animal;
    //       button.setAttribute('data-target', '#deleteAnimalModal');
    //     }
      
    // public onUserAdd(addFormUser: NgForm): void {
    //   //document.getElementById('add-user-form')?.click();
    //   this.loginService.addUser(addFormUser.value).subscribe({
    //     next: (response: User) => {
    //       console.log(response);
    //       this.getUsers();
    //       addFormUser.reset();
    //        this.toastr.success("User has been sucessfully added!");
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       this.toastr.error('sorry login name is taken!')
    //       addFormUser.reset();
    //     }
    //   })
    // }
    // public getUsers(): void {
    //   this.loginService.getUsers().subscribe({
    //     next: (response: User[]) => {
    //       this.users = response;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       alert(error.message);
    //     }
    //   })
    // }
}
