import { Room, EntityMap, Client, nosync } from "colyseus";
import { GameState } from "./GameState";
import { MessageHandler } from "../message/MessageHandler";

export class GameHandlerRoom extends Room<GameState> {
    maxClients = 4;
    messageHandler:MessageHandler;
    onInit (options) {
        console.log("GameHandlerRoom created!", options);
        var state = new GameState();
        this.messageHandler = new MessageHandler(state);
        this.setState(state);
    }

    onJoin (client) {
        this.state.playerJoin(client.sessionId);
    }

    onLeave (client) {
        this.state.removePlayer(client.sessionId);
    }

    onMessage (client, data) {
        console.log("StateHandlerRoom received message from", client.sessionId, ":", data);
        var gameAction = this.messageHandler.getAction(client,data);
        gameAction.execute();
    }

    onDispose () {
        console.log("Dispose StateHandlerRoom");
    }
}