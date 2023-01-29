import { Component } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  score: number = QuizComponent.score;
  max: number = QuizComponent.counterGlobal;

  percentage: number = (this.score/this.max)*100;
}
