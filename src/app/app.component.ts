import { Component, OnInit } from '@angular/core';
import { AnimalService } from './service/animal.service';
import { Animal } from './konstruktor/animal';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Observable, of, from, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = " ZOO !";


  public animals: Animal[] = [];
  public editAnimal: Animal | undefined;
  public deleteAnimal: Animal | undefined;
  messages: any;
  
  constructor(private animalService: AnimalService, private toastr: ToastrService) { }

  ngOnInit(){
    this.getAnimals();
  }



  public getAnimals(): void {
    this.animalService.getAnimals().subscribe({
      next: (response: Animal[]) => {
        this.animals = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }


// klasa informuje nas który pracownik został wciśniety
  public onOpenModal( mode: string, animal?: Animal): void {
    // mam dostep do całego div'a 21 linia w html
    const container  = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    // Sprawdzenie który przycisk został wciśnięty przez uzytkownia
      if(mode === 'add'){
        button.setAttribute('data-target', '#addAnimalModal');
      }
     if(mode === 'edit'){
      
       this.editAnimal = animal;
        button.setAttribute('data-target', '#updateAnimalModal');
      }
      if(mode === 'delete'){
        this.deleteAnimal = animal;
        button.setAttribute('data-target', '#deleteAnimalModal');
      }
      // po tym jak wiemy który gizik został wciśiety za sprawa powyższych if'ów
      // dzieki temu przycisk istnieje dla kodu html
      container?.appendChild(button);
      // później go wciskamy
      button.click();
 }

}
