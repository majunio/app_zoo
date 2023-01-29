import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import './../../assets/smtp';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  lat = 52.2584547;
  lng = 21.0206449;
  constructor(private toastr: ToastrService, private http: HttpClient) { 
    }
    

    onSubmit(contactForm: NgForm) {
      if (contactForm.valid) {
        const email = contactForm.value;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post('https://formspree.io/f/mwkjvorz',
          { name: email.name, replyto: email.email, message: email.messages },
          { 'headers': headers }).subscribe(
            response => {
              console.log(response);
              this.toastr.success("Email sent!");
              contactForm.reset();
            }
          );
      }
    }
      
}
