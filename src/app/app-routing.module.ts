import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeadComponent } from './head/head.component';
import { AnimalComponent } from './animal/animal/animal.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { PaymeComponent } from './payme/payme.component';

const routes: Routes = [
  {
    path: '',
    component: HeadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'payme',
    component: PaymeComponent
  },
  {
    path: 'animal',
    component: AnimalComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'quiz/:id',
    component: QuizComponent
  },
  {
    path: 'score',
    component: ScoreComponent
  },
  {
    path: '**',
    component: HeadComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
