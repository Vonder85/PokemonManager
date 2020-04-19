export class Pokemon {

    id: number;
    name: string;
    type: string;

  /*id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;*/


    constructor(id: number , name: string, type: string) {
      this.id = id;
      this.name = name;
      this.type = type;
    }

}
