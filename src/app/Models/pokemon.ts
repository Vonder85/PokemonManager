export class Pokemon {

    /*id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;*/


    constructor(public id: number, public nom: string, public description: string, public taille: number, public poids: number) {}


   /* convertirTaille(taille): number {
        let result = 0;
    if (taille > 100) {
        const tailleOk = taille.toString();
        const tailleSplit = tailleOk.split();

        const resultat: string = tailleSplit[0] + ',' + tailleSplit[1] + tailleSplit[2];
        // tslint:disable-next-line:label-position
        result =  parseFloat(resultat);
        return result;
    } else {
        result = taille;
    }
        return result;
}*/


    toString(): string {
        return  this.id + ' : ' + this.nom.toString() + ', ' + this.description + ', qui mesure ' + this.taille +  ' cm et pèse ' + this.poids + ' kg' ;
    }
}
