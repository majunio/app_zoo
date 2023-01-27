import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../konstruktor/question';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router, private service: QuestionService  ) {}

  ngOnInit() 
  {
    const animalId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getQuestionsByAnimalId(animalId).subscribe(res => {
      this.questions = res;
    });
  }


}
