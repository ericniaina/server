import { Message } from "./MessageHandler";
import { GameState } from "../rooms/GameState";
import { Player } from "../rooms/Player";
import { Position } from "../rooms/Carte";

export class PickPosition implements Message {
    constructor(public state:GameState, public playerId:string, public data:any) {

    }

    execute() {        
        console.log( this.playerId, "being placed on :", this.data.position);
        this.state.placerJoueur(this.playerId, this.data.position);
    }
}