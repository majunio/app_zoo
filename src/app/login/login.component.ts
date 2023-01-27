import { Component, OnInit } from '@angular/core';
import { User } from '../konstruktor/user';
import { LoginService } from 'src/app/service/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginUser: User | undefined;

  user:User = new User();
  constructor(private loginService: LoginService, private toastr: ToastrService,){}

  ngOnInit(): void{}

  public userLogin()
  {
    console.log(this.user)
    this.loginService.loginUser(this.user).subscribe(data=>{

      this.toastr.success("You successfully logged in!");
    }, error=>this.toastr.error('sorry incorrect Login or Password!'))
  }
  
}
