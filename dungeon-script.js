import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Calling bootstrapExtra will initiliaze all the "custom properties"  
bootstrapExtra();

WA.chat.sendChatMessage('Glück auf!');
WA.chat.sendChatMessage('Hello world', 'Mr Robot');