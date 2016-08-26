// Declare the class of the game where all the action happens
class Tetris {
  id: string;
  width: number;
  height: number;

  constructor(id: string, width: number, height: number){
    this.id = id;
    this.width = width;
    this.height = height;
    this.createSvgArea();
  }

  // Create the game area as an SVG HTML5 tag
  private createSvgArea(){
    var width: string = this.width + "vw";
    var height: string = this.height + "vh";
    document.getElementById("container").innerHTML = "<svg id="+this.id+" width="+width+" height="+height+" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'> </svg>"

    this.spawnTetromino();
  }

  // Spawn the chosen tetromino
  private spawnTetromino(){
    // Store this, or store game if it exists for further spawning after game has started (i.e. loaded)
    var _this = game || this;

    var vwToPx: number = (_this.width * document.documentElement.clientWidth ) / 100;

    var tetrominos: Array<Object> =
    [
      new function(){
        this.type = "rect";
        this.id = "bar";
        this.attributes = new function(){
          this.height = 30,
          this.width = 150,
          // Cf README.md pour explication
          this.x = (vwToPx - this.width) / 2,
          this.y = 0
        }
      },

      new function(){
        this.type = "rect";
        this.id = "square";
        this.attributes = new function(){
          this.height = 60,
          this.width = 60,
          this.x = (vwToPx - this.width) / 2,
          this.y = 0
        }
      },

      new function(){
        this.type = "path";
        this.id = "L";
        this.attributes = new function(){
          this.d = `M${(vwToPx - 60) / 2}, 0 v90, 0 h0, 60 v-30, 0 h0, -30 v-60 z`;
        }
      },

      new function(){
        this.type = "path";
        this.id = "J";
        this.attributes = new function(){
          this.d = `M${(vwToPx + 60) / 2}, 0 v90, 0 h0, -60 v-30, 0 h0, 30 v-60 z`;
        }
      },

      new function(){
        this.type = "path";
        this.id = "T";
        this.attributes = new function(){
          this.d = `M${(vwToPx - 90 / 2) / 2}, 0 h0, 30 v30, 0 h0, 30 v30, 0 h0, -90 v-30, 0 h0, 30  z`;
        }
      },

      new function(){
        this.type = "path";
        this.id = "S";
        this.attributes = new function(){
          this.d = `M${(vwToPx - 90) / 2}, 0 v30, 0 h0, 30 v30, 0 h0, 60 v-30, 0 h0, -30 v-30, 0 h0, -60 z`;
        }
      },

      new function(){
        this.type = "path";
        this.id = "Z";
        this.attributes = new function(){
          this.d = `M${(vwToPx + 90) / 2}, 0 v30, 0 h0, -30 v30, 0 h0, -60 v-30, 0 h0, 30 v-30, 0 h0, 60 z`;
        }
      }
    ]

    var tetromino: any = tetrominos[Math.floor(Math.random() * tetrominos.length)];

    var id: string = tetromino.id;
    var type: string = tetromino.type;
    var attributes: Object = tetromino.attributes;

    // Create a new tetromino
    new Tetromino(id, type, attributes);
  }

}


// Declare Tetromino class
class Tetromino {
  svgns: string = "http://www.w3.org/2000/svg";
  class: string;
  id: string;
  type: string;
  attributes: Object;

  constructor(id: string, type: string, attributes: Object){
    this.class = "tetrominos";
    this.id = this.setId(id, this.class);
    this.type = type;
    this.attributes = attributes;
    this.draw();
  }

  // Draw the chosen tetromino in the game area
  private draw(){
    var elem = document.createElementNS(this.svgns, this.type);
    elem.setAttribute("class", this.class);
    elem.setAttribute("id", this.id);
    for(var attribute in this.attributes){
      var name: string = attribute;
      var value: string = this.attributes[attribute];
      elem.setAttribute(name, value);
    }
    // console.log(elem);
    document.getElementById("svgArea").appendChild(elem);
  }

  // Count how many of elements of the given id exist and set this.id accordingly
  private setId(id: string, which: string){
    console.log(" id = " + id);
    var classes = document.getElementsByClassName(which);
    var e = 0;
    for(var i = 0; i < classes.length; i++){
      if(classes[i].id.indexOf(id) != -1){
        e++;
      };
    };
    return id + e.toString();
  };

}



// Declare player
class Player {

}

// Create new game
var game: any = new Tetris("svgArea", 30, 99);

var create = document.getElementById('create');
create.addEventListener('click', game.spawnTetromino);






// I'm just leaving this here for later in case I actually use it...
var color = ["blue", "red", "pink", "yellow", "green"];
