import { Component } from '@angular/core';
import { Animal } from 'src/app/konstruktor/animal';
import { AnimalService } from 'src/app/service/animal.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  title = " ZOO !";
  lat = 52.2584547;
  lng = 21.0206449;
  
  public animals: Animal[] = [];
  public editAnimal: Animal | undefined;
  public deleteAnimal: Animal | undefined;
  animal$: Observable<Animal[]> | undefined;

  ngOnInit(){
    this.getAnimals();

  }

 constructor(private animalService: AnimalService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { 
    
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

// klasa inforuje nas który pracownik został wciśniety
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

//dodawanie przy pomocy komunikacji z bakendem
  public onAddAnimal(addForm: NgForm): void {
    document.getElementById('add-animal-form')?.click();
    this.animalService.addAnimal(addForm.value).subscribe({
      next: (response: Animal) => {
        console.log(response);
        this.getAnimals();
         addForm.reset();
         this.toastr.success("Animal has been sucessfully added!");
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
         addForm.reset();
      }
    })
  }


  public onUpdateAnimal(animal: Animal): void {
    this.editAnimal = animal;

      this.animalService.updateAnimal(animal).subscribe({
      next: (response: Animal) => {
        console.log(response);
        this.getAnimals();
        this.toastr.success("Animal has been sucessfully updated!");
      },
      error: (Response) => {
        this.toastr.error('Animal with such name already exists!');
      }
    })

  }
  public onDeleteAnimal(animalId: number): void {
    this.animalService.deleteAnimal(animalId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getAnimals();
        this.toastr.success("Animal has been sucessfully deleted!");
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
// zrobić tak, żeby sie wyświetlał komunikat o braku zadnego na to imie?
  public searchAnimals(key:string):void{
    // pokazuje w konsoli w przeglądarce co pogram robi
    console.log(key);
    const results: Animal[] = [];
    for(const animal of this.animals){
      if(animal.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || animal.latinName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || animal.endangered.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || animal.regionOfOrigin.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(animal);
      }
    }
    this.animals = results;
    if(results.length === 0 || !key){
      // this.toastr.warning('Animal name starting with such letters does not exists!');
      this.getAnimals();
    }
  }

}
