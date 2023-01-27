import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeadComponent } from './head/head.component';
import { AnimalComponent } from './animal/animal/animal.component';
import { QuizComponent } from './quiz/quiz.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
