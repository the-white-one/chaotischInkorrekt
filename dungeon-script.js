import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Calling bootstrapExtra will initiliaze all the "custom properties"  
bootstrapExtra();

WA.chat.sendChatMessage('Hello world', 'Mr Robot');

WA.chat.sendChatMessage('Glück auf!');


WA.room.onEnterLayer('start').subscribe(() => {
    WA.chat.sendChatMessage("Welcome to the Dungeon!", 'Mr Robot');
});