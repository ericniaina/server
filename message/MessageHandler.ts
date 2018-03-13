import { Player } from "../rooms/Player";
import { PickPosition } from "./PickPosition";
import { GameState } from "../rooms/GameState";

export interface Message {
    data: any;
    playerId: string;
    state: GameState;
    execute();
}

export class MessageHandler {
    constructor(public state: GameState) { }
    public getAction(client: any, data: any): Message {

        if (data.join) {
            return new PickPosition(this.state, client.sessionId, data);
        }
    }
}
