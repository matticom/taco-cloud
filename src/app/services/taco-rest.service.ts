import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Taco} from "../domain/taco";
import {Ingredient} from "../domain/ingredient";
import {Type} from "../domain/type.enum";

@Injectable()
export class TacoRestService {
  ingredients: Ingredient[];

  constructor(private httpClient: HttpClient) { }

  getRecentIngredients(): Promise<Ingredient[]> {

    let ingredPromise = new Promise<Ingredient[]>((resolve, reject) =>

    this.httpClient.get('http://localhost:8080/design/recent')
      .toPromise()
      .then(
        data => {
              this.ingredients = (<Array<any>>data).map(item => {
                    return new Ingredient(
                      item.id,
                      item.name,
                      <Type> item.type
                    );
              });
              resolve(this.ingredients);
        },
        msg => {
          reject(msg);
        }
      )
    )
    return ingredPromise;
  }

  pushNewTaco(taco: Taco): Promise<Taco> {

    const url = 'http://localhost:8080/design';
    let headers = {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json') //application/json
        .append('Authorization', "Basic " + btoa('ma:pw'))
    };
    console.log(JSON.stringify(taco));
    console.log(JSON.stringify(headers));


    let tacoPromise = new Promise<Taco>((resolve, reject) =>
      this.httpClient
        .post(url, JSON.stringify(taco), headers)
        .toPromise()
        .then(response => {
          resolve(response as Taco);
        })
        .catch(error => console.log(error))
    )
    return tacoPromise;
  }
}


