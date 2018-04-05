import {Component, OnInit} from '@angular/core';
import {TacoRestService} from "./services/taco-rest.service";
import {Taco} from "./domain/taco";
import {Ingredient} from "./domain/ingredient";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Type} from "./domain/type.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Taco Cloud Viewer (REST Demo App)';
  ingredients: Ingredient[];
  myform: FormGroup;
  tacoName: FormControl;
  taco: Taco;

  constructor(private restService: TacoRestService){}

  ngOnInit() {
    this.tacoName = new FormControl('', Validators.required);
    this.myform = new FormGroup({
      tacoName: this.tacoName
    });
  }

  getRecentIngredients(): void {
     this.restService.getRecentIngredients().then( ingreds => {
       this.ingredients = ingreds;
         console.log("fulfilled");

     }
       );
    console.log("mal schauen....")
  }

  onSubmit() {
    if (this.myform.valid) {
      this.restService.pushNewTaco(
        new Taco(new Date().toISOString(), this.tacoName.value, [new Ingredient('FLTO', 'Flour Tortilla', Type["WRAP"])])
      ).then(taco => this.taco);
      console.log(`Form Submitted!`);
    } else {
      console.log("Form wasn't submitted, because isn't valid")
    }
  }
}
