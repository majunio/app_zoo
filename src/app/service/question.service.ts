import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../konstruktor/question';
import { environment } from 'src/environments/environment';



@Injectable({providedIn: 'root'})
export class QuestionService {


private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getQuestionsByAnimalId(id: number): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.apiServerUrl}/question/findforid/${id}`);
  }

  public getCorrectAnswer(id: number): Observable<String>
  {
    return this.http.get<String>(`${this.apiServerUrl}/question/answer/${id}`);
  }

}