import {Type} from "./type.enum";

export class Ingredient {
  constructor(
    public id: string,
    public name: string,
    public type: Type
  ){}
}
