import { Couleur, Valeur, Carte } from "./Carte";

export class GameMode {
    atout = {}
    pointsAtout = {}
    pointsSansAtout = {}

    constructor(toutAtout:boolean, Atout?: Couleur) {
        this.atout[Couleur.CARREAU] = false;
        this.atout[Couleur.COEUR] = false;
        this.atout[Couleur.PIQUE] = false;
        this.atout[Couleur.TREFFLE] = false;

        if (!toutAtout && Atout) {
            this.atout[Atout] = true;
        }
        else {
            this.atout[Couleur.CARREAU] = true;
            this.atout[Couleur.COEUR] = true;
            this.atout[Couleur.PIQUE] = true;
            this.atout[Couleur.TREFFLE] = true;
        }
    }

    private initPoints()  {
        this.pointsAtout[Valeur.VALET] = 20;
        this.pointsAtout[Valeur.NEUF] = 14;
        this.pointsAtout[Valeur.As] = 11;
        this.pointsAtout[Valeur.DIX] = 10;
        this.pointsAtout[Valeur.ROI] = 4;
        this.pointsAtout[Valeur.DAME] = 3;
        this.pointsAtout[Valeur.HUIT] = 0;
        this.pointsAtout[Valeur.SEPT] = 0;
        
        this.pointsSansAtout[Valeur.VALET] = 2;
        this.pointsSansAtout[Valeur.NEUF] = 0;
        this.pointsSansAtout[Valeur.As] = 11;
        this.pointsSansAtout[Valeur.DIX] = 10;
        this.pointsSansAtout[Valeur.ROI] = 4;
        this.pointsSansAtout[Valeur.DAME] = 3;
        this.pointsSansAtout[Valeur.HUIT] = 0;
        this.pointsSansAtout[Valeur.SEPT] = 0;
    }

    calculPoint(carte:Carte):number {
        if (this.atout[carte.couleur]) {
            return this.pointsAtout[carte.valeur];
        }
        return this.pointsSansAtout[carte.valeur];
    }
}