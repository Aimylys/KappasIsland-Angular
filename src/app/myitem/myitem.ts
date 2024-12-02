export class Item {

  id: number;
  name: string;
  description: string;
  games: string;

  constructor (index:number,name: string, description: string, games: string) {
    this.id = index;
    this.name = name;
    this.description = description;
    this.games = games;
  }

}
