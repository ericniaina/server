import { GameMode } from "./GameMode";

export enum Position {
    NORD = "Nord",
    SUD = "Sud",
    EST = "Est",
    OUEST = "Ouest",
}

export enum Couleur {
    TREFFLE = "TR",
    COEUR = "CO",
    CARREAU = "CA",
    PIQUE = "PI",
}

export enum Valeur {
    VALET = "V",
    NEUF = "9",
    As = "A",
    DIX  = "10",
    ROI  = "R",
    DAME = "D",
    HUIT = "8",
    SEPT = "7"
}

export class Carte {
    couleur: Couleur;
    valeur: Valeur;

    point(mode:GameMode):number {
        return mode.calculPoint(this);
    }
}