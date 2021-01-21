# Virtuelle chaotischInkorrekt Assembly

## Karten und Übergänge

Aktuell sind 6 Karten geplant. In jeder Karte muss für jeden Ausgang ein Layer mit dem Namen "exit_<zielkarte>" angelegt werden. Die dazugehörige "ExitSceneUrl" ist der Dateiname inklusive Ziellayer (beginnend mit #). In der Zielkarte muss das passende Layer "start_<herkunftskarte>" erstellt werden.

### main
* &lt;extern&gt;
* EG.json#start_main 
* BaumhausUnten.json#start_main
  
### EG
* main.json#start_eg
* UG.json#start_eg
* OG.json#start_eg

### OG
* EG.json#start_og
* DG.json#start_og
* BaumhausUnten.json#start_og

### DG
* OG.json#start_dg
* BaumhausOben.json#start_dg

### BaumhausUnten
* main.json#start_bu
* OG.json#start_bu
* BaumhausOben.json#start_bu

### BaumhausOben
* BaumhausUnten.json#start_bo
* DG.json#start_bo

### Besondere Übergänge
* Übergang zum Sendezentrum
* Kaminnetzwerk
* Klonetzwerk

# WorkAdventure

Dieses Projekt nutzt WorkAdventure wie es von den anderen Assemblys ebenfalls gemacht wird.

## Tools you will need

In order to build your own map for WorkAdventure, you need:

- the [Tiled editor](https://www.mapeditor.org/) software
- "tiles" (i.e. images) to create your map (this starter kit provides a good default tileset for offices)
- a web-server to serve your map (this starter kit proposes to use Github static pages as a web-server which is both free and performant)

## Getting started

Wenn du mithelfen willst, sprich uns an! Als aktuelle Arbeitsgrundlage dient derzeit dieses github repository.


### Loading the map in Tiled

You can load this file in [Tiled](https://www.mapeditor.org/).


Some resources regarding Tiled:

- [Tiled documentation](https://doc.mapeditor.org/en/stable/manual/introduction/)
- [Tiled video tutorials](https://www.gamefromscratch.com/post/2015/10/14/Tiled-Map-Editor-Tutorial-Series.aspx)

### About WorkAdventu.re maps

In order to design a map that will be readable by WorkAdventure, you will have to respect some constraints.

In particular, you will need to:

- set a start position for the players
- configure the "floor layer" (so that WorkAdventure can correctly display characters above the floor, but under the ceiling)
- eventually, you can place exits that link to other maps

All this is described in the [WorkAdventure documentation](https://github.com/thecodingmachine/workadventure/#designing-a-map).
Please be sure to check it out. 

### Pushing the map

When your changes are ready, you need to "commit" and "push" the changes back to GitHub.
Just wait a few minutes, and your map will be propagated automatically to the GitHub pages web-server.


#Probiere die Karte aus

Dieser Link (https://the-white-one.github.io/chaotischInkorrekt/) ruft die Demo auf. Da diese (aktuell) auch zum testen genutzt wird, steht die Map nicht immer zur Verfügung.
