/*
 * (c) 2022 Chaotisch Inkorrekt <@>
 * License: CC0-1.0
 */
function welcome_message() {
          WA.chat.sendChatMessage('Welcome to Chaotisch Inkorrekt!.', '#cinkorrekt');
}

WA.onInit().then(() => {
        //console.log('Current player name: ', WA.player.name);

        // Trigger the function at this time (GIVEN IN GMT!!)
        // or later...
        setTimeout(welcome_message, 5000);

});




let buehnenshow;

WA.room.onEnterZone('buehnenshow', () => {
//    tomb1Popup = WA.ui.openPopup("rect_tomb1", "R.I.P.\nEuropean Data Retention\n2006 - 2014(?)", []);
        WA.chat.sendChatMessage('Glückauf!', 'Nicolas');
        WA.chat.sendChatMessage('Hallo!', 'Reini');

});



/*
WA.room.onEnterZone('tomb2', () => {
    tomb2Popup = WA.ui.openPopup("rect_tomb2", "PLOT SOLD\n\nEU-US Privacy Framework\n 2022(?) - ", []);
});
*/