import {Ingredient} from "./ingredient";

export class Taco {
  public id: number;
  constructor(
              public createdAt: string,
              public name: string,
              public ingredients: Ingredient[]
  ) {}
}
