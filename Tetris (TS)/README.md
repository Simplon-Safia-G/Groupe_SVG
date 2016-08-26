# **TETRIS**

A *Tetris* clone to try out SVG and TypeScript.

#### **Work in Progress.**

## Explication de l'algorithme à la ligne 65 (TS)

Nous devons configurer la position du point de spawn de nos tetrominos qui doit être situé au milieu de la largeur de la zone de jeu, dans notre cas, notre balise SVG.

Nous avons cependant un problème - la largeur de notre SVG est en vw alors que la largeur de nos tetrominos est en pixel.  
Le but de l'algorithme est donc de trouver un moyen de convertir nos vw en pixel tout en paramétrant la position au centre du SVG.

Un petit voyage sur Stackoverflow nous donne la formule utilisée pour convertir des pixels en vw :  
`1px = (100 / taille du client)vw`

En supposant une résolution de largeur de 600px, nous pouvons donc supposer :  
`600px = (100 * 600 / taille du client)vw`

Sachant cela, nous pouvons déterminer la formule inverse pour convertir des vw en pixel, supposant x la largeur de notre résolution d'écran en pixel :  
```
vw = (100 * x) / client  
vw * client = 100 * x  
(vw * client) / 100 = x  
```
Dans notre cas :  
`x = (_this.width * document.documentElement.clientWidth) / 100`  
où `_this` est l'objet de la classe Tetris, soit notre SVG.

On soustraie la largeur de notre tetromino pour prendre en compte que les éléments HTML ont leur point d'origin sur la marge de gauche :  
`x = (_this.width * document.documentElement.clientWidth) / 100 - this.width`  
où `this` est notre tetromino.

On divise le tout par 2 pour positioner le tetromino au centre du SVG :  
`x = ((_this.width * document.documentElement.clientWidth) / 100 - this.width) / 2`

Ce qui nous donne notre algorithme :  
`this.x =  ((_this.width * document.documentElement.clientWidth ) / 100 - this.width) / 2 + "px"`
