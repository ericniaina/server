import { EntityMap } from "colyseus";
import { Player } from "./Player";
import { Position } from "./Carte";


export class GameState {
    players: EntityMap<Player> = {};

    playerJoin (id: string) {
        this.players[ id ] = new Player();
    }

    placerJoueur(id:string, position:Position) {
        this.players[id].position = position;
    }

    removePlayer (id: string) {
        delete this.players[ id ];
    }
    
}