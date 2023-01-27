import { Component, OnInit, Provider } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Toast, ToastrComponentlessModule } from 'ngx-toastr';
import { Question } from '../konstruktor/question';
import { QuestionService } from '../service/question.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  noOfQuestions: number | undefined;
  questions: Question[] = [];
  static counterGlobal: number = 0;
  static score: number = 0;
  counter: number;  
  constructor(
    private route: ActivatedRoute,
    private router: Router, private service: QuestionService) {
      this.counter = QuizComponent.counterGlobal;
    }

  ngOnInit() 
  {
    const animalId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getQuestionsByAnimalId(animalId).subscribe(res => {
      this.questions = res;
    });
    this.noOfQuestions = this.questions.length; 
   // this.router.navigate()
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
   this.reloadCurrentRoute();
  }
  // checkAnswer2(answer: String, id: number): void{
  //   if(this.service.getCorrectAnswer(id).toString() == answer)
  //   {
  //     QuizComponent.score++;
  //     QuizComponent.counterGlobal++;
  //   }else
  //   {
  //     QuizComponent.counterGlobal++;
  //   }  
  //  this.reloadCurrentRoute();
  // }

}