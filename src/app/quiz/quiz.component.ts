import { Component, OnInit, Provider } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Toast, ToastrComponentlessModule } from 'ngx-toastr';
import { Question } from '../konstruktor/question';
import { QuestionService } from '../service/question.service';
import { ScoreComponent } from '../score/score.component';
import { DOCUMENT } from '@angular/common';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  noOfQuestions: number = 0;
  questions: Question[] = [];
  static counterGlobal: number = 0;
  static score: number = 0;
  counter: number = 0;  
  constructor(
    private route: ActivatedRoute,
    private router: Router, private service: QuestionService) {

    }

  ngOnInit() 
  {
    const animalId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getQuestionsByAnimalId(animalId).subscribe(res => {
      this.questions = res;
    });
    this.counter = QuizComponent.counterGlobal;
    let noOfQuestions = Object.keys(this.questions).length; 


  }

  // ngOnDestroy()
  // {
  //   QuizComponent.score = 0;
  //   QuizComponent.counterGlobal = 0;
  // }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
  checkAnswer(answer: String, id: number): void{
    if(this.service.getCorrectAnswer(id).toString() == answer)
    {
      QuizComponent.score++;
      QuizComponent.counterGlobal++;
    }else
    {
      QuizComponent.counterGlobal++;
    }
    if(this.questions[QuizComponent.counterGlobal].id.toString().length == 0)
    {
      this.router.navigate(['/score']);
    }
    else{
      this.reloadCurrentRoute(); 
    }
  }
}