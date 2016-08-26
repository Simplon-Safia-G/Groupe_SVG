var Tetris = (function () {
    function Tetris(id, width, height) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.createSvgArea();
    }
    Tetris.prototype.createSvgArea = function () {
        var width = this.width + "vw";
        var height = this.height + "vh";
        document.getElementById("container").innerHTML = "<svg id=" + this.id + " width=" + width + " height=" + height + " xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'> </svg>";
        this.spawnTetromino();
    };
    Tetris.prototype.spawnTetromino = function () {
        var _this = game || this;
        var vwToPx = (_this.width * document.documentElement.clientWidth) / 100;
        var tetrominos = [
            new function () {
                this.type = "rect";
                this.id = "bar";
                this.attributes = new function () {
                    this.height = 30,
                        this.width = 150,
                        this.x = (vwToPx - this.width) / 2,
                        this.y = 0;
                };
            },
            new function () {
                this.type = "rect";
                this.id = "square";
                this.attributes = new function () {
                    this.height = 60,
                        this.width = 60,
                        this.x = (vwToPx - this.width) / 2,
                        this.y = 0;
                };
            },
            new function () {
                this.type = "path";
                this.id = "L";
                this.attributes = new function () {
                    this.d = "M" + (vwToPx - 60) / 2 + ", 0 v90, 0 h0, 60 v-30, 0 h0, -30 v-60 z";
                };
            },
            new function () {
                this.type = "path";
                this.id = "J";
                this.attributes = new function () {
                    this.d = "M" + (vwToPx + 60) / 2 + ", 0 v90, 0 h0, -60 v-30, 0 h0, 30 v-60 z";
                };
            },
            new function () {
                this.type = "path";
                this.id = "T";
                this.attributes = new function () {
                    this.d = "M" + (vwToPx - 90 / 2) / 2 + ", 0 h0, 30 v30, 0 h0, 30 v30, 0 h0, -90 v-30, 0 h0, 30  z";
                };
            },
            new function () {
                this.type = "path";
                this.id = "S";
                this.attributes = new function () {
                    this.d = "M" + (vwToPx - 90) / 2 + ", 0 v30, 0 h0, 30 v30, 0 h0, 60 v-30, 0 h0, -30 v-30, 0 h0, -60 z";
                };
            },
            new function () {
                this.type = "path";
                this.id = "Z";
                this.attributes = new function () {
                    this.d = "M" + (vwToPx + 90) / 2 + ", 0 v30, 0 h0, -30 v30, 0 h0, -60 v-30, 0 h0, 30 v-30, 0 h0, 60 z";
                };
            }
        ];
        var tetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
        var id = tetromino.id;
        var type = tetromino.type;
        var attributes = tetromino.attributes;
        new Tetromino(id, type, attributes);
    };
    return Tetris;
}());
var Tetromino = (function () {
    function Tetromino(id, type, attributes) {
        this.svgns = "http://www.w3.org/2000/svg";
        this.class = "tetrominos";
        this.id = this.setId(id, this.class);
        this.type = type;
        this.attributes = attributes;
        this.draw();
    }
    Tetromino.prototype.draw = function () {
        var elem = document.createElementNS(this.svgns, this.type);
        elem.setAttribute("class", this.class);
        elem.setAttribute("id", this.id);
        for (var attribute in this.attributes) {
            var name = attribute;
            var value = this.attributes[attribute];
            elem.setAttribute(name, value);
        }
        document.getElementById("svgArea").appendChild(elem);
    };
    Tetromino.prototype.setId = function (id, which) {
        console.log(" id = " + id);
        var classes = document.getElementsByClassName(which);
        var e = 0;
        for (var i = 0; i < classes.length; i++) {
            if (classes[i].id.indexOf(id) != -1) {
                e++;
            }
            ;
        }
        ;
        return id + e.toString();
    };
    ;
    return Tetromino;
}());
var Player = (function () {
    function Player() {
    }
    return Player;
}());
var game = new Tetris("svgArea", 30, 99);
var create = document.getElementById('create');
create.addEventListener('click', game.spawnTetromino);
var color = ["blue", "red", "pink", "yellow", "green"];
