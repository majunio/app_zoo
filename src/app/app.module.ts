import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnimalService } from './service/animal.service';
import { LoginService } from 'src/app/service/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { AnimalComponent } from './animal/animal/animal.component';
import { HeadComponent } from './head/head.component';
import { QuizComponent } from './quiz/quiz.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScoreComponent } from './score/score.component';
import { PaymeComponent } from './payme/payme.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AnimalComponent,
    HeadComponent,
    QuizComponent,
    PageNotFoundComponent,
    ScoreComponent,
    PaymeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,//do logowania
    AppRoutingModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC00PZn1gBU23cpac5kwdsUM740FndSAGA'
    }),
    // pozwala na robienie testu
    HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
