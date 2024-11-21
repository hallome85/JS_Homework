export interface IMeal {
  readonly name: string;
  getPrice(): number;
 
}

export enum DOUGH_TYPE {
  THIN = "Thin",
  FERMENTED = "Fermented",
  THICK = "Thick",
}


export enum PIZZA_SIZE {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
}

