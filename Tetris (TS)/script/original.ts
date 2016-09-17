// // Extend native classes to make them more useful
// class CustomArray extends Array {
//   // Loop method, forEach is too limited
//   loopAndFilter(prop: string, value: any, htmlElem: boolean = false){
//     for(var i = 0; i < this.length; i++){
//       var e = this[i].filterByProperty(prop, value, htmlElem);
//
//       if(e){
//         break;
//       }
//     };
//
//     return e;
//   };
// };
//
// class BasicSquare {
//   class: string = "basicSquare"
//   id: string;
//   svgns: string = "http://www.w3.org/2000/svg";
//   width: number = basicSquare;
//   height: number = basicSquare;
//   x: string;
//   y: string;
//
//   constructor(x: number, y: number){
//     this.id = this.setId("basic", this.class);
//     this.x = x.toString();
//     this.y = y.toString();
//
//     this.drawSquare();
//   };
//
//   private setId(id, which){
//     var classes = document.getElementsByClassName(which);
//
//     var e = 0;
//
//     for(var i = 0; i < classes.length; i++){
//       if(classes[i].id.indexOf(id) != -1){
//         e++;
//       };
//     };
//
//     return id + e.toString();
//   };
//
//   private drawSquare(){
//     var _thisGame = document.getElementById("svgArea");
//     var newSquare = document.createElementNS(this.svgns, "rect");
//     newSquare.setAttribute("class", this.class);
//     newSquare.id = this.id;
//     newSquare.setAttribute("x", this.x + "px");
//     newSquare.setAttribute("y", this.y + "px");
//     newSquare.setAttribute("width", this.width.toString() + "px");
//     newSquare.setAttribute("height", this.height.toString() + "px");
//     newSquare.setAttribute("fill", "none");
//     newSquare.setAttribute("stroke", "black");
//
//     _thisGame.appendChild(newSquare);
//     gameZone.push(newSquare);
//   }
// }
//
// // Declare the class of the game
// class Tetris {
//   id: string;
//   width: number;
//   height: number;
//   maxWidth: number;
//   maxHeight: number;
//
//   constructor(id: string, width: number, height: number){
//     this.id = id;
//     this.width = width;
//     this.height = height;
//     this.maxWidth = width * basicWidth;
//     this.maxHeight = height * basicHeight;
//
//     this.createSvgArea();
//     this.spawnTetromino();
//   }
//
//   // Create the game area as an SVG HTML5 tag
//   private createSvgArea(){
//     var width: string = this.maxWidth + "px";
//     var height: string = this.maxHeight + "px";
//     document.getElementById("container").innerHTML = "<svg id="+this.id+" width="+width+" height="+height+" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'> </svg>"
//
//     for(var i = 0; i < basicWidth; i++){
//       for(var j = 0; j < basicHeight; j++){
//         new BasicSquare(this.width * i, this.height * j);
//       }
//     }
//   }
//
//   // Spawn the chosen tetromino
//   private spawnTetromino(){
//     // Store this, or store game if it exists for further spawning after game has started (i.e. loaded)
//     var _this = game || this;
//
//     // Cf README.md pour explication
//     // var vwToPx: number = (_this.width * document.documentElement.clientWidth ) / 100;
//     var vwToPx: number = _this.maxWidth;
//
//     var tetrominos: Array<Object> =
//     [
//       // new function(){
//       //   this.type = "rect";
//       //   this.id = "bar";
//       //   this.attributes = new function(){
//       //     this.height = 30,
//       //     this.width = 150,
//       //     this.x = 0,
//       //     this.y = 0,
//       //     this.fill = "#00fdff",
//       //     this.transform = `translate(${(vwToPx / 2)  - this.width + 90}, -120) rotate(0)`
//       //   }
//       // },
//       //
//       // new function(){
//       //   this.type = "rect";
//       //   this.id = "square";
//       //   this.attributes = new function(){
//       //     this.height = 60,
//       //     this.width = 60,
//       //     this.x = 0,
//       //     this.y = 0,
//       //     this.fill = "#ffff00",
//       //     this.transform = `translate(${(vwToPx / 2)  - this.width + 30}, -120) rotate(0)`
//       //   }
//       // },
//
//       new function(){
//         this.type = "polygon";
//         this.id = "L";
//         // 90,0 90,60 60,60 60,30 0,30 0,0
//         this.attributes = new function(){
//           this.points = `${basicSquare * 3}, ${basicSquare * 0} ${basicSquare * 3}, ${basicSquare * 2}, ${basicSquare * 2}, ${basicSquare * 2} ${basicSquare * 2}, ${basicSquare * 1} ${basicSquare * 0}, ${basicSquare * 1} ${basicSquare * 0}, ${basicSquare * 0}`,
//           this.fill = "#ff8000",
//           this.transform = `translate(${(vwToPx / 2) - basicSquare}, -120) rotate(0)`
//         }
//       },
//
//       new function(){
//         this.type = "polygon";
//         this.id = "J";
//         // 0,60 -90,60 -90,30 -30,30 -30,0 0,0
//         this.attributes = new function(){
//           this.points = `${basicSquare * 0}, ${basicSquare * 2} ${basicSquare * -3}, ${basicSquare * 2} ${basicSquare * -3}, ${basicSquare * 1} ${basicSquare * -1}, ${basicSquare * 1} ${basicSquare * -1}, ${basicSquare * 0} ${basicSquare * 0}, ${basicSquare * 0} `,
//           this.fill = "#0000ff",
//           this.transform = `translate(${(vwToPx / 2) + basicSquare}, -120) rotate(0)`
//         }
//       },
//
//       new function(){
//         this.type = "polygon";
//         this.id = "T";
//         // 30,0 30,30 60,30 60,60 30,60 30,90 0,90 0,0
//         this.attributes = new function(){
//           this.points = `${basicSquare * 1}, ${basicSquare * 0} ${basicSquare * 1}, ${basicSquare * 1} ${basicSquare * 2}, ${basicSquare * 1} ${basicSquare * 2}, ${basicSquare * 2} ${basicSquare * 1}, ${basicSquare * 2} ${basicSquare * 1}, ${basicSquare * 3} ${basicSquare * 0}, ${basicSquare * 3} ${basicSquare * 0}, ${basicSquare * 0}`,
//           this.fill = "#f0f",
//           this.transform = `translate(${(vwToPx / 2) - basicSquare}, -120) rotate(0)`
//         }
//       },
//
//       new function(){
//         this.type = "polygon";
//         this.id = "Z";
//         // 30,0 30,30 60,30 60,90 30,90 30,60 0,60 0,0
//         this.attributes = new function(){
//           this.points = `${basicSquare * 1}, ${basicSquare * 0} ${basicSquare * 1}, ${basicSquare * 1} ${basicSquare * 2}, ${basicSquare * 1} ${basicSquare * 2}, ${basicSquare * 3} ${basicSquare * 1}, ${basicSquare * 3} ${basicSquare * 1}, ${basicSquare * 2} ${basicSquare * 0}, ${basicSquare * 2} ${basicSquare * 0}, ${basicSquare * 0}`,
//           this.fill = "#f00",
//           this.transform = `translate(${(vwToPx / 2) - (basicSquare * 2)}, -120) rotate(0)`
//         }
//       },
//
//       new function(){
//         this.type = "polygon";
//         this.id = "S";
//         // 30,0 30,-30 60,-30 60,-90 30,-90 30,-60 0,-60 0,0
//         this.attributes = new function(){
//           this.points = `${basicSquare * 1}, ${basicSquare * 0} ${basicSquare * 1}, ${basicSquare * -1} ${basicSquare * 2}, ${basicSquare * -1} ${basicSquare * 2}, ${basicSquare * -3} ${basicSquare * 1}, ${basicSquare * -3} ${basicSquare * 1}, ${basicSquare * -2} ${basicSquare * 0}, ${basicSquare * -2} ${basicSquare * 0}, ${basicSquare * 0}`,
//           this.fill = "#0f0",
//           this.transform = `translate(${(vwToPx / 2) + (basicSquare * 2)}, -120) rotate(0)`
//         }
//       }
//     ];
//
//     var tetromino: any = tetrominos[Math.floor(Math.random() * tetrominos.length)];
//
//     var id: string = tetromino.id;
//     var type: string = tetromino.type;
//     var attributes: Object = tetromino.attributes;
//
//     // Create a new tetromino
//     new Tetromino(id, type, attributes);
//   }
//
//   private gameOver(){
//     alert("you're terrible");
//   };
//
//   // Method to check if game over
//   private checkGameOver(){
//     var _thisTetromino = tetrominosObj.loopAndFilter("state", "active", true);
//
//     return _thisTetromino.getBoundingClientRect().top < document.getElementById("svgArea").getBoundingClientRect().top ? true : false;
//   }
//
// }
//
// // Declare Tetromino class
// class Tetromino {
//   svgns: string = "http://www.w3.org/2000/svg";
//   class: string;
//   id: string;
//   type: string;
//   control: boolean;
//   state: string;
//   attributes: Object;
//
//   constructor(id: string, type: string, attributes: any){
//     this.class = "tetrominos";
//     this.id = this.setId(id, this.class);
//     console.log(" id = " + this.id);
//     this.type = type;
//     this.control = true;
//     this.state = "active";
//     this.attributes = attributes;
//     this.draw();
//
//     tetrominosObj.push(this);
//
//     this.animate();
//   }
//
//   // Search function to find specific tetromino by property and value
//   filterByProperty(prop: string, value: any, htmlElem: boolean = false): Object{
//     var _this = this;
//     if(!_this[prop]) { return };
//
//     if(htmlElem){
//       if(_this[prop] == value){
//         var tetrominos = document.getElementsByClassName("tetrominos");
//         for(var j = 0; j < tetrominos.length; j++){
//           if(_this.id == tetrominos[j].getAttribute("id")){
//             return tetrominos[j];
//           }
//         }
//       }
//     } else {
//       if(this[prop] == value){
//         return this;
//       }
//     }
//   }
//
//   // Draw the chosen tetromino in the game area
//   private draw(){
//     var g = document.createElementNS(this.svgns, 'g');
//     var elem = document.createElementNS(this.svgns, this.type);
//     elem.setAttribute("class", this.class);
//     elem.setAttribute("id", this.id);
//     g.setAttribute("stroke", "black");
//
//     for(var attribute in this.attributes){
//       if(attribute == "transform"){
//         var name: string = attribute;
//         var value: string = this.attributes[attribute];
//         g.setAttribute(name, value);
//       } else {
//         var name: string = attribute;
//         var value: string = this.attributes[attribute];
//         elem.setAttribute(name, value);
//       }
//     }
//
//     document.getElementById("svgArea").appendChild(g).appendChild(elem);
//   }
//
//   // Count how many of elements of the given id exist and set this.id accordingly
//   private setId(id: string, which: string){
//     var classes = document.getElementsByClassName(which);
//     var e = 0;
//     for(var i = 0; i < classes.length; i++){
//       if(classes[i].id.indexOf(id) != -1){
//         e++;
//       };
//     };
//     return id + e.toString();
//   };
//
//   // Make tetrominos fall
//   private animate(){
//     var i = 0;
//
//     var interval = setInterval(function(){
//       var tetrominoObj: any = tetrominosObj.loopAndFilter("state", "active", false);
//       var tetromino: any = tetrominosObj.loopAndFilter("state", "active", true);
//
//       var translate = getPosition(tetromino);
//       var translateX = translate[0];
//       var translateY = translate[1];
//
//       // console.log(translate);
//
//       var rotate = tetromino.parentElement.getAttribute("transform").split('(')[2].split(')')[0].split(',')[0];
//
//       var halfWidth = tetromino.getBBox().x != 0 ? tetromino.getBBox().x + (tetromino.getBBox().width / 2) : tetromino.getBBox().width / 2;
//       var halfHeight = tetromino.getBBox().y != 0 ? tetromino.getBBox().y + (tetromino.getBBox().height / 2) : tetromino.getBBox().height / 2;
//
//       if(tetromino.getBoundingClientRect().bottom < document.getElementById("svgArea").getBoundingClientRect().bottom - 1) {
//         translateY = Number(translateY) + basicSquare;
//       };
//
//       tetromino.parentElement.setAttribute("transform", `translate(${translateX}, ${translateY}) rotate(${rotate}, ${halfWidth}, ${halfHeight})`);
//
//       if(tetromino.getBoundingClientRect().bottom == document.getElementById("svgArea").getBoundingClientRect().bottom - 1){
//         if(game.checkGameOver()){
//           tetrominoObj.control = false;
//           tetrominoObj.state = "inactive";
//           clearInterval(interval);
//
//           // for(var i = 0; i < gameZone.length; i++){
//           //   if(gameZone[i].getAttribute("x") == tetromino)
//           // }
//
//           game.gameOver()
//         } else {
//           if(player.moving){
//             i = 0;
//           } else {
//             i++;
//           };
//
//           if(i > 10){
//             tetrominoObj.state = "inactive";
//             tetrominoObj.control = false;
//             clearInterval(interval);
//             i = 0;
//             game.spawnTetromino();
//           };
//         };
//       };
//     }, 100);
//   };
//
//   // private collision(movement = "fall", move = 0){
//   //
//   //   var _html: any = this.filterByProperty("state", "active", true);
//   //   var tetrominosHtml: any = document.getElementsByClassName("tetrominos");
//   //
//   //   var _htmlBox: any = _html.getBoundingClientRect();
//   //
//   //  var _htmlCircles = _html.parentElement.getElementsByTagName("circle");
//   //
//   //   for(var i = 0; i < tetrominosHtml.length; i++){
//   //
//   //     if(tetrominosHtml[i].id != _html.id){
//   //       var tetrominosHtmlBox:any = tetrominosHtml[i].getBoundingClientRect();
//   //
//   //       var border = 1;
//   //
//   //       var tetrominosPoints = tetrominosHtml[i].getAttribute("points").split(" ");
//   //
//   //       var tetrominosCoordinates = [];
//   //
//   //       for(var point = 0; point < tetrominosPoints.length; point++){
//   //         tetrominosCoordinates.push(new function(){
//   //           this.x = Number(tetrominosPoints[point].split(",")[0]) - (border*2);
//   //           this.y = Number(tetrominosPoints[point].split(",")[1]) - (border*2);
//   //         });
//   //       };
//   //
//   //       if(movement == "fall"){
//   //         if(tetrominosHtmlBox.top <= _htmlBox.bottom
//   //            && tetrominosHtmlBox.left + border <= _htmlBox.right - border
//   //            && tetrominosHtmlBox.right - border >= _htmlBox.left + border){
//   //             return true;
//   //         };
//   //       } else if(movement == "right") {
//   //         if(tetrominosHtmlBox.top < _htmlBox.bottom
//   //            && _htmlBox.right - border + move >= tetrominosHtmlBox.left + border
//   //            && _htmlBox.left < tetrominosHtmlBox.left){
//   //            return true
//   //         }
//   //       } else if(movement == "left") {
//   //         if(tetrominosHtmlBox.top < _htmlBox.bottom
//   //            && _htmlBox.left + border - move <= tetrominosHtmlBox.right - border
//   //            && _htmlBox.right - border > tetrominosHtmlBox.left + border){
//   //            return true
//   //         }
//   //       }
//   //     }
//   //   };
//   //
//   // };
//
//   // Method to delete the tetromino JS object, the tetromino HTML element and remove it from the tetrominos Array of Objects
//   private deleteTetromino(){
//     var tetrominosHtml: any = document.getElementsByClassName("tetrominos");
//     var indexOfObject: number = tetrominosObj.indexOf(this);
//     var htmlElement: any = tetrominosObj.loopAndFilter("state", "active", true);
//
//
//     for(var i = 0; i < tetrominosHtml.length; i++){
//       if(tetrominosHtml[i].id == htmlElement.id){
//         htmlElement.parentNode.removeChild(htmlElement);
//         tetrominosObj.splice(indexOfObject, 1);
//         break;
//       };
//     };
//
//     delete this;
//   };
//
// };
//
// // Declare player
// class Player {
//   // Each control
//   rotate: number;
//   left: number;
//   right: number;
//   moving: boolean;
//
//   constructor(rotate: number, left: number, right: number){
//     this.rotate = rotate;
//     this.left = left;
//     this.right = right;
//     this.moving = false;
//   }
//
//   // Move the tetromino according to key press
//   private moveTetromino(event){
//
//     // Get the specific tetromino to move
//     var tetrominoObj: any = tetrominosObj.loopAndFilter("control", true, false);
//     var tetromino: any = tetrominosObj.loopAndFilter("control", true, true);
//
//     // Store the position of the game area to add restrictions to movement (i.e. tetrominos shouldn't go out of bound)
//     var positionTop: number = document.getElementById("svgArea").getBoundingClientRect().top;
//     var positionLeft: number = document.getElementById("svgArea").getBoundingClientRect().left;
//     var positionRight: number = document.getElementById("svgArea").getBoundingClientRect().right;
//
//     // Get center point of tetromino for rotating on center
//     var halfWidth = tetromino.getBBox().x != 0 ? tetromino.getBBox().x + (tetromino.getBBox().width / 2) : tetromino.getBBox().width / 2;
//     var halfHeight = tetromino.getBBox().y != 0 || tetromino.id.indexOf("S") != -1 || tetromino.id.indexOf("T") != -1 ? tetromino.getBBox().y + (tetromino.getBBox().height / 2) : tetromino.getBBox().height / 2;
//
//
//     // Store the transform property needed (translate to move, rotate to rotate)
//     var translate: Array<number> = getPosition(tetromino);
//     var translateX: number = translate[0];
//     var translateY: number = translate[1];
//     var rotate: any = tetromino.parentElement.getAttribute("transform").split('(')[2].split(')')[0].split(',')[0];
//
//     // The default value for the distance tetrominos move on each key press
//     var defaultMove: number = basicSquare;
//
//     // The default value of rotation
//     var defaultRotate: number = 90
//     if(timeout) clearTimeout(timeout);
//     var timeout;
//     var timer = 500;
//
//     switch(event.keyCode){
//       case player.left:
//       player.moving = true;
//
//       event.preventDefault();
//
//       translateX -= defaultMove;
//
//       if(positionLeft < tetromino.getBoundingClientRect().left - defaultMove && !tetrominoObj.collision("left", defaultMove)){
//         tetromino.parentElement.setAttribute("transform", `translate(${translateX}, ${translateY}) rotate(${rotate}, ${halfWidth}, ${halfHeight})`);
//       };
//
//       timeout = setTimeout(function(){
//         player.moving = false;
//       }, timer);
//
//       break;
//
//       case player.right:
//       player.moving = true;
//
//       event.preventDefault();
//
//       translateX = Number(translateX) + defaultMove;
//
//       if(tetromino.getBoundingClientRect().right + defaultMove < positionRight && !tetrominoObj.collision("right", defaultMove)){
//         tetromino.parentElement.setAttribute("transform", `translate(${translateX}, ${translateY}) rotate(${rotate}, ${halfWidth}, ${halfHeight})`);
//       }
//
//       timeout = setTimeout(function(){
//         player.moving = false;
//       }, timer);
//
//       break;
//
//       case player.rotate:
//       player.moving = true;
//
//       event.preventDefault();
//
//       rotate = Number(rotate) + defaultRotate;
//
//       tetromino.parentElement.setAttribute("transform", "rotate(0)")
//
//       // Set rotate back to 0 if equal to 360 because it's prettier than having degrees in the thousands
//       if(rotate == 360){
//         rotate = 0;
//       }
//
//       tetromino.parentElement.setAttribute("transform", `translate(${translateX}, ${translateY}) rotate(${rotate}, ${halfWidth}, ${halfHeight})`);
//
//       timeout = setTimeout(function(){
//         player.moving = false;
//       }, timer);
//
//       break;
//     }
//
//   };
//
// };
//
// // Function to get the X and Y position of a tetromino
// function getPosition(type: any){
//   var htmlElem: any;
//   type instanceof Tetromino ? htmlElem = type.filterByProperty("id", type.id, true) : htmlElem = type;
//
//   var x = htmlElem.parentElement.getAttribute("transform").split('(')[1].split(' ')[0].split(',')[0];
//   var y = htmlElem.parentElement.getAttribute("transform").split('(')[1].split(' ')[1].replace(/[{()}]/g, '');
//
//   return [x, y];
// };
//
// var tetrominosObj = new CustomArray;
// var gameZone = new CustomArray;
//
// // Basic square upon which the game and tetrominos are built
// var basicSquare = 60;
// var basicWidth = 480 / basicSquare;
// var basicHeight = 660 / basicSquare;
//
// // Create new game
// var game: any = new Tetris("svgArea", basicSquare, basicSquare);
//
// var create = document.getElementById('create');
// create.addEventListener('click', game.spawnTetromino);
// var player: any = new Player(32, 37, 39);
// document.addEventListener('keydown', player.moveTetromino);
