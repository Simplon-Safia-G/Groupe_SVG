var BasicSquare = (function () {
    function BasicSquare(x, y, classy, id) {
        this.svgns = "http://www.w3.org/2000/svg";
        this.width = basicSquare;
        this.height = basicSquare;
        this.class = classy;
        this.id = this.setId(this.class, this.class);
        this.x = x.toString();
        this.y = y.toString();
        this.drawSquare(id);
    }
    ;
    BasicSquare.prototype.setId = function (id, which) {
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
    BasicSquare.prototype.drawSquare = function (id) {
        var _thisGame = document.getElementById(id);
        var newSquare = document.createElementNS(this.svgns, "rect");
        newSquare.setAttribute("class", this.class);
        newSquare.id = this.id;
        newSquare.setAttribute("x", this.x + "px");
        newSquare.setAttribute("y", this.y + "px");
        newSquare.setAttribute("width", this.width.toString());
        newSquare.setAttribute("height", this.height.toString());
        this.id.indexOf("basicSquare") != -1 ? newSquare.setAttribute("fill", noFill) : newSquare.setAttribute("fill", "none");
        newSquare.setAttribute("stroke", defaultStroke);
        _thisGame.appendChild(newSquare);
    };
    return BasicSquare;
}());
var UserInterface = (function () {
    function UserInterface(id, width, height) {
        this.svgns = "http://www.w3.org/2000/svg";
        this.id = id;
        this.width = width * (basicWidth + userInterfaceWidth);
        this.height = height * basicHeight;
        this.createSvgArea();
        this.createMenu();
    }
    ;
    UserInterface.prototype.createSvgArea = function () {
        var width = this.width + "px";
        var height = this.height + "px";
        document.getElementById("container").innerHTML = "<svg id=" + this.id + " width=" + width + " height=" + height + " xmlns=" + this.svgns + " xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'> </svg>";
        this.menu = document.getElementById(this.id);
    };
    ;
    UserInterface.prototype.createMenu = function () {
        var _this = userInterface || this;
        var svgArea = _this.menu;
        while (svgArea.firstChild) {
            svgArea.removeChild(svgArea.firstChild);
        }
        ;
        var g = document.createElementNS(this.svgns, "g");
        g.setAttribute("id", "gContainer");
        g.setAttribute("transform", "translate(" + basicSquare * 2 + ", " + basicSquare * 4 + ")");
        svgArea.appendChild(g);
        var gTitle = document.createElementNS(this.svgns, "g");
        g.appendChild(gTitle);
        var fill = ["#ef76ae", "#6dc358", "#f56926", "#9c79b7", "#04bbf2", "#f0543d"];
        var stroke = ["#910758", "#005715", "#c14711", "#530c60", "#126c93", "#940d12"];
        var letters = ["T", "E", "T", "R", "I", "S"];
        for (var i = 0; i < letters.length; i++) {
            var title = document.createElementNS(this.svgns, "text");
            title.setAttribute("style", "font-size:100px; fill:" + fill[i] + "; stroke:" + stroke[i]);
            if (letters[i] == "I") {
                title.setAttribute("transform", "translate(" + (((basicSquare * 2) * i) + 5) + ")");
            }
            else if (letters[i] == "S") {
                title.setAttribute("transform", "translate(" + (((basicSquare * 2) * i) - 30) + ")");
            }
            else {
                title.setAttribute("transform", "translate(" + (basicSquare * 2) * i + ")");
            }
            ;
            title.innerHTML = letters[i];
            gTitle.appendChild(title);
        }
        ;
        var subtitle = document.createElementNS(this.svgns, "text");
        subtitle.setAttribute("style", "font-family: sans-serif; font-size:100px; stroke: #755f25; fill: #fcc82d; font-weight: bold");
        subtitle.setAttribute("transform", "translate(" + basicSquare * 3.5 + ", " + basicSquare * 2.5 + ")");
        subtitle.innerHTML = "TS";
        gTitle.appendChild(subtitle);
        var gLevel = document.createElementNS(this.svgns, "g");
        gLevel.setAttribute("transform", "translate(" + basicSquare * 4.6 + ", " + basicSquare * 4 + ")");
        g.appendChild(gLevel);
        var levelText = document.createElementNS(this.svgns, "text");
        levelText.innerHTML = "Level :";
        gLevel.appendChild(levelText);
        var foreignObject = document.createElementNS(this.svgns, "foreignObject");
        foreignObject.setAttribute("transform", "translate(" + basicSquare * 1.5 + ", " + -basicSquare / 2.2 + ")");
        gLevel.appendChild(foreignObject);
        var levelInput = document.createElement("input");
        levelInput.setAttribute("id", "levelInput");
        levelInput.setAttribute("type", "number");
        levelInput.setAttribute("min", "0");
        levelInput.value = "0";
        foreignObject.appendChild(levelInput);
        var gNewGame = document.createElementNS(this.svgns, "g");
        gNewGame.setAttribute("transform", "translate(" + basicSquare * 4 + ", " + basicSquare * 4.5 + ")");
        g.appendChild(gNewGame);
        var newGameText = document.createElementNS(this.svgns, "text");
        newGameText.setAttribute("style", "font-size:15px");
        newGameText.setAttribute("transform", "translate(" + basicSquare + ", " + basicSquare * 0.65 + ")");
        newGameText.innerHTML = "New Game";
        gNewGame.appendChild(newGameText);
        var gNewGamePath = document.createElementNS(this.svgns, "g");
        gNewGamePath.setAttribute("transform", "translate(30, 15)");
        gNewGame.appendChild(gNewGamePath);
        var newGamePath = document.createElementNS(this.svgns, "path");
        newGamePath.setAttribute("transform", "scale(0.015)");
        newGamePath.setAttribute("d", "M0 0q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z");
        gNewGamePath.appendChild(newGamePath);
        var newGameRect = document.createElementNS(this.svgns, "rect");
        newGameRect.setAttribute("fill", "transparent");
        newGameRect.setAttribute("style", "cursor:pointer");
        newGameRect.setAttribute("stroke", "black");
        newGameRect.setAttribute("width", "" + basicSquare * 3.5);
        newGameRect.setAttribute("height", "" + basicSquare);
        gNewGame.appendChild(newGameRect);
        newGameRect.addEventListener('click', this.newGame);
        var gSettings = document.createElementNS(this.svgns, "g");
        gSettings.setAttribute("id", "settingsContainer");
        gSettings.setAttribute("transform", "translate(" + basicSquare * 4 + ", " + basicSquare * 5.7 + ")");
        g.appendChild(gSettings);
        var settingsText = document.createElementNS(this.svgns, "text");
        settingsText.setAttribute("style", "font-size:15px");
        settingsText.setAttribute("transform", "translate(" + basicSquare * 1.2 + ", " + basicSquare * 0.65 + ")");
        settingsText.innerHTML = "Settings";
        gSettings.appendChild(settingsText);
        var gSettingsPath = document.createElementNS(this.svgns, "g");
        gSettingsPath.setAttribute("transform", "translate(22, 18)");
        gSettings.appendChild(gSettingsPath);
        var settingsPath = document.createElementNS(this.svgns, "path");
        settingsPath.setAttribute("transform", "scale(0.015)");
        settingsPath.setAttribute("d", "M0 0q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z");
        gSettingsPath.appendChild(settingsPath);
        var settingsRect = document.createElementNS(this.svgns, "rect");
        settingsRect.setAttribute("id", "settings");
        settingsRect.setAttribute("width", "" + basicSquare * 3.5);
        settingsRect.setAttribute("height", "" + basicSquare);
        settingsRect.setAttribute("fill", "transparent");
        settingsRect.setAttribute("stroke", "black");
        settingsRect.setAttribute("style", "cursor:pointer");
        gSettings.appendChild(settingsRect);
        settingsRect.addEventListener('click', this.setUpSettings);
    };
    ;
    UserInterface.prototype.setUpSettings = function () {
        if (document.getElementById("settingsMenu"))
            return;
        var _this = userInterface;
        var svgArea = _this.menu;
        var doubleKeys = [];
        if (game) {
            var gPaused = document.createElementNS(_this.svgns, "g");
            gPaused.setAttribute("id", "paused");
            svgArea.appendChild(gPaused);
            var greyRect = document.createElementNS(_this.svgns, "rect");
            greyRect.setAttribute("width", "100%");
            greyRect.setAttribute("height", "100%");
            greyRect.setAttribute("fill", "grey");
            greyRect.setAttribute("style", "opacity:0.75");
            gPaused.appendChild(greyRect);
        }
        ;
        var gSettings = document.createElementNS(_this.svgns, "g");
        gSettings.setAttribute("transform", "translate(" + basicSquare * 2 + ", " + basicSquare * 7 + ")");
        gSettings.setAttribute("id", "settingsMenu");
        svgArea.appendChild(gSettings);
        var settingsMenuRect = document.createElementNS(_this.svgns, "rect");
        settingsMenuRect.setAttribute("width", "" + basicSquare * 10.7);
        settingsMenuRect.setAttribute("height", "" + basicSquare * 10);
        settingsMenuRect.setAttribute("fill", "white");
        settingsMenuRect.setAttribute("stroke", "black");
        gSettings.appendChild(settingsMenuRect);
        var gClose = document.createElementNS(_this.svgns, "g");
        gClose.setAttribute("id", "closeBtn");
        gSettings.appendChild(gClose);
        var gClosePath = document.createElementNS(_this.svgns, "g");
        gClosePath.setAttribute("transform", "translate(" + basicSquare + ", " + basicSquare + ")");
        gClose.appendChild(gClosePath);
        var closePath = document.createElementNS(_this.svgns, "path");
        closePath.setAttribute("transform", "scale(0.015)");
        closePath.setAttribute("d", "M0 0q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z");
        gClosePath.appendChild(closePath);
        var closeRect = document.createElementNS(_this.svgns, "rect");
        closeRect.setAttribute("x", "" + basicSquare * .25);
        closeRect.setAttribute("y", "" + basicSquare * .35);
        closeRect.setAttribute("fill", "transparent");
        closeRect.setAttribute("stroke", "black");
        closeRect.setAttribute("style", "cursor:pointer;");
        closeRect.setAttribute("height", "" + basicSquare);
        closeRect.setAttribute("width", "" + basicSquare);
        gClose.appendChild(closeRect);
        closeRect.addEventListener("click", closeSettings);
        var gControls = document.createElementNS(_this.svgns, "g");
        gControls.setAttribute("transform", "translate(" + basicSquare * 2 + ", " + basicSquare * 2 + ")");
        gSettings.appendChild(gControls);
        var controls = [];
        var i = 0;
        for (var property in player) {
            if (player[property] != player.moving) {
                if (typeof player[property] != "string")
                    break;
                controls.push([property, player[property]]);
                var gRow = document.createElementNS(_this.svgns, "g");
                gRow.setAttribute("id", "" + (property + "Row"));
                gRow.setAttribute("transform", "translate(0, " + basicSquare * i + ")");
                gControls.appendChild(gRow);
                var name = document.createElementNS(_this.svgns, "text");
                name.innerHTML = property.split('')[0].toUpperCase() + property.substring(1) + ":";
                gRow.appendChild(name);
                var gValue = document.createElementNS(_this.svgns, "g");
                gValue.setAttribute("transform", "translate(" + basicSquare * 2 + ")");
                gRow.appendChild(gValue);
                var value = document.createElementNS(_this.svgns, "text");
                value.innerHTML = player[property].length > 1 ? player[property] : player[property].toUpperCase();
                value.setAttribute("id", "" + property);
                value.setAttribute("class", "keyValues");
                value.setAttribute("text-anchor", "middle");
                value.setAttribute("transform", "translate(" + basicSquare * 1.5 + ")");
                gValue.appendChild(value);
                var valueRect = document.createElementNS(_this.svgns, "rect");
                valueRect.setAttribute("stroke", "black");
                valueRect.setAttribute("fill", "transparent");
                valueRect.setAttribute("width", "" + basicSquare * 3);
                valueRect.setAttribute("height", "" + (basicSquare - 5));
                valueRect.setAttribute("y", "" + -basicSquare / 1.7);
                valueRect.setAttribute("style", "cursor:pointer;");
                gValue.appendChild(valueRect);
                valueRect.addEventListener("click", popupHandler);
                var gWarning = document.createElementNS(_this.svgns, "g");
                gWarning.setAttribute("id", "" + (property + "Warning"));
                gWarning.setAttribute("style", "opacity:0");
                gWarning.setAttribute("transform", "translate(" + basicSquare * 6 + ", 2.5)");
                gRow.appendChild(gWarning);
                var warningPath = document.createElementNS(_this.svgns, "path");
                warningPath.setAttribute("transform", "scale(0.015)");
                warningPath.setAttribute("d", "M0 0v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z");
                gWarning.appendChild(warningPath);
                i++;
            }
        }
        ;
        var seperator = document.createElementNS(_this.svgns, "line");
        seperator.setAttribute("x1", "" + basicSquare * 1);
        seperator.setAttribute("y1", "" + basicSquare * 7);
        seperator.setAttribute("x2", "" + basicSquare * 9);
        seperator.setAttribute("y2", "" + basicSquare * 7);
        seperator.setAttribute("stroke-width", "1");
        seperator.setAttribute("stroke", "black");
        gSettings.appendChild(seperator);
        var gMute = document.createElementNS(_this.svgns, "g");
        gMute.setAttribute("transform", "translate(" + basicSquare * 2 + ", " + basicSquare * 8 + ")");
        gSettings.appendChild(gMute);
        var muteText = document.createElementNS(_this.svgns, "text");
        muteText.innerHTML = "Music";
        gMute.appendChild(muteText);
        var gSlider = document.createElementNS(_this.svgns, "g");
        gSlider.setAttribute("transform", "translate(" + basicSquare * 1.5 + ", " + -basicSquare / 8 + ")");
        gMute.appendChild(gSlider);
        var sliderRect = document.createElementNS(_this.svgns, "rect");
        sliderRect.setAttribute("width", "" + basicSquare * 4);
        sliderRect.setAttribute("height", "" + basicSquare * 0.02);
        sliderRect.setAttribute("fill", "black");
        gSlider.appendChild(sliderRect);
        var sliderCircle = document.createElementNS(_this.svgns, "circle");
        sliderCircle.setAttribute("cx", "" + (Number(sliderRect.getAttribute("width"))) * (volume / 100));
        sliderCircle.setAttribute("r", "5");
        gSlider.appendChild(sliderCircle);
        var cursorX;
        function volumeHandler(event) {
            if (event.type === "mousedown") {
                document.addEventListener("mousemove", volumeControl);
            }
            else {
                document.removeEventListener("mousemove", volumeControl);
                if (volume != 0) {
                    var workaround = document.getElementById("music");
                    workaround.volume = volume / 100;
                    if (workaround.muted) {
                        player.toggleMusic();
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
        sliderCircle.addEventListener("mousedown", volumeHandler);
        document.addEventListener("mouseup", volumeHandler);
        function volumeControl(event) {
            event.preventDefault();
            if (sliderCircle.getBoundingClientRect().right <= sliderRect.getBoundingClientRect().right + 5 && sliderCircle.getBoundingClientRect().left >= sliderRect.getBoundingClientRect().left - 5) {
                cursorX = event.clientX - svgArea.getBoundingClientRect().right + gSettings.getBoundingClientRect().left - basicSquare * 0.6;
                volume = Math.floor((cursorX / Number(sliderRect.getAttribute("width"))) * 100);
                if (volume < 0)
                    volume = 0;
                if (volume > 100)
                    volume = 100;
                sliderCircle.setAttribute("cx", "" + cursorX);
            }
            ;
            if (sliderCircle.getBoundingClientRect().right >= sliderRect.getBoundingClientRect().right) {
                sliderCircle.setAttribute("cx", "" + (cursorX - 10));
            }
            else if (sliderCircle.getBoundingClientRect().left <= sliderRect.getBoundingClientRect().left - 5) {
                sliderCircle.setAttribute("cx", "" + (cursorX + 10));
            }
            ;
            var workaround = document.getElementById("music");
            if (volume == 0 && !workaround.muted) {
                player.toggleMusic();
            }
            ;
        }
        ;
        function popupHandler(event) {
            newKeyPopup(function () {
                doubleKeys = [];
                var values = Array.from(document.getElementsByClassName("keyValues"));
                var sortedValues = [];
                for (var e = 0; e < values.length; e++) {
                    document.getElementById("" + (values[e].getAttribute("id") + "Warning")).setAttribute("style", "opacity:0");
                    document.getElementById("" + values[e].getAttribute("id")).setAttribute("class", "keyValues");
                    sortedValues.push([values[e].innerHTML, values[e].getAttribute("id")]);
                }
                ;
                sortedValues = sortedValues.sort(function (a, b) {
                    if (a[0] < b[0])
                        return -1;
                    if (a[0] > b[0])
                        return 1;
                    return 0;
                });
                for (var j = 0; j < sortedValues.length; j++) {
                    sortedValues[j];
                    sortedValues[j + 1];
                    if (sortedValues[j + 1] && sortedValues[j + 1][0] == sortedValues[j][0]) {
                        document.getElementById("" + (sortedValues[j][1] + "Warning")).setAttribute("style", "opacity:1");
                        document.getElementById("" + (sortedValues[j + 1][1] + "Warning")).setAttribute("style", "opacity:1");
                        document.getElementById("" + sortedValues[j][1]).setAttribute("class", "keyValues warned");
                        document.getElementById("" + sortedValues[j + 1][1]).setAttribute("class", "keyValues warned");
                        doubleKeys.push(true);
                    }
                    ;
                }
                ;
            });
        }
        ;
        function newKeyPopup(callbackCheck) {
            var _this = userInterface;
            var svgArea = userInterface.menu;
            var settingsMenu = document.getElementById("settingsMenu");
            var g = document.createElementNS(_this.svgns, "g");
            g.setAttribute("id", "popupContainer");
            settingsMenu.appendChild(g);
            var greyRect = document.createElementNS(_this.svgns, "rect");
            greyRect.setAttribute("width", "" + basicSquare * 10.7);
            greyRect.setAttribute("height", "" + basicSquare * 10);
            greyRect.setAttribute("style", "opacity:0.75");
            greyRect.setAttribute("fill", "grey");
            greyRect.setAttribute("stroke", "black");
            g.appendChild(greyRect);
            var gPopup = document.createElementNS(_this.svgns, "g");
            gPopup.setAttribute("transform", "translate(" + basicSquare * 2 + ", " + basicSquare * 4 + ")");
            g.appendChild(gPopup);
            var popupRect = document.createElementNS(_this.svgns, "rect");
            popupRect.setAttribute("fill", "white");
            popupRect.setAttribute("stroke", "black");
            popupRect.setAttribute("width", "" + basicSquare * 7);
            popupRect.setAttribute("height", "" + basicSquare);
            gPopup.appendChild(popupRect);
            var popupText = document.createElementNS(_this.svgns, "text");
            popupText.setAttribute("transform", "translate(15, 22)");
            popupText.innerHTML = "Press new key (escape to cancel)";
            gPopup.appendChild(popupText);
            var target = event.target;
            target = target.parentNode.firstChild;
            function handler(event) {
                assignKey(event, target);
            }
            ;
            document.addEventListener("keyup", handler, false);
            function assignKey(event, target) {
                event.stopImmediatePropagation();
                if (event.key == "Escape" || event.which == 27) {
                    return closePopup();
                }
                ;
                player[target.getAttribute("id")] = event.key;
                player[target.getAttribute("id") + "Code"] = event.which;
                target.innerHTML = player[target.getAttribute("id")].length > 1 ? player[target.getAttribute("id")] : player[target.getAttribute("id")].toUpperCase();
                callbackCheck();
                return closePopup();
                function closePopup() {
                    var settingsMenu = document.getElementById("settingsMenu");
                    var popup = document.getElementById("popupContainer");
                    document.removeEventListener("keyup", handler);
                    return settingsMenu.removeChild(popup);
                }
                ;
            }
            ;
        }
        ;
        function closeSettings() {
            var svgArea = userInterface.menu;
            var gSettings = document.getElementById("settingsMenu");
            if (doubleKeys.indexOf(true) == -1) {
                svgArea.removeChild(gSettings);
                if (document.getElementById("paused"))
                    svgArea.removeChild(document.getElementById("paused"));
                sliderCircle.removeEventListener("mousedown", volumeHandler);
                document.removeEventListener("mouseup", volumeHandler);
            }
            else {
                var gWarningContainer = document.createElementNS(_this.svgns, "g");
                gWarningContainer.setAttribute("id", "warningContainer");
                gSettings.appendChild(gWarningContainer);
                var greyRect = document.createElementNS(_this.svgns, "rect");
                greyRect.setAttribute("width", "" + basicSquare * 10.7);
                greyRect.setAttribute("height", "" + basicSquare * 10);
                greyRect.setAttribute("fill", "grey");
                greyRect.setAttribute("style", "opacity:0.75");
                gWarningContainer.appendChild(greyRect);
                var gWarning = document.createElementNS(_this.svgns, "g");
                gWarning.setAttribute("transform", "translate(" + basicSquare * 2 + ", " + basicSquare * 3 + ")");
                gWarningContainer.appendChild(gWarning);
                var warningRect = document.createElementNS(_this.svgns, "rect");
                warningRect.setAttribute("width", "" + basicSquare * 7);
                warningRect.setAttribute("height", "" + basicSquare * 3);
                warningRect.setAttribute("fill", "pink");
                warningRect.setAttribute("stroke", "black");
                gWarning.appendChild(warningRect);
                var warningText = document.createElementNS(_this.svgns, "text");
                var tspan1 = document.createElementNS(_this.svgns, "tspan");
                var tspan2 = document.createElementNS(_this.svgns, "tspan");
                tspan1.setAttribute("x", "0");
                tspan2.setAttribute("x", "0");
                tspan1.setAttribute("dy", "1.2em");
                tspan2.setAttribute("dy", "1.2em");
                tspan1.innerHTML = "Two or more settings use";
                tspan2.innerHTML = "the same keys :";
                warningText.setAttribute("text-anchor", "middle");
                warningText.setAttribute("transform", "translate(" + basicSquare * 3.5 + ")");
                gWarning.appendChild(warningText);
                warningText.appendChild(tspan1);
                warningText.appendChild(tspan2);
                var gClosePath = document.createElementNS(_this.svgns, "g");
                gClosePath.setAttribute("transform", "translate(" + basicSquare * .67 + "," + basicSquare * .71 + ")");
                gWarning.appendChild(gClosePath);
                var closePath = document.createElementNS(_this.svgns, "path");
                closePath.setAttribute("transform", "scale(0.010)");
                closePath.setAttribute("d", "M0 0q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z");
                gClosePath.appendChild(closePath);
                var closeRect = document.createElementNS(_this.svgns, "rect");
                closeRect.setAttribute("x", "" + basicSquare * .25);
                closeRect.setAttribute("y", "" + basicSquare * .35);
                closeRect.setAttribute("fill", "transparent");
                closeRect.setAttribute("stroke", "black");
                closeRect.setAttribute("style", "cursor:pointer;");
                closeRect.setAttribute("height", "" + basicSquare / 2);
                closeRect.setAttribute("width", "" + basicSquare / 2);
                gWarning.appendChild(closeRect);
                closeRect.addEventListener("click", closeWarning);
                var warnedElements = Array.from(document.getElementsByClassName("keyValues warned"));
                var warnedElementsIds = [];
                var gElementText = document.createElementNS(_this.svgns, "g");
                gElementText.setAttribute("transform", "translate(" + basicSquare + ", " + basicSquare * 2 + ")");
                gWarning.appendChild(gElementText);
                var elementText = document.createElementNS(_this.svgns, "text");
                for (var o = 0; o < warnedElements.length; o++) {
                    warnedElementsIds.push(warnedElements[o].getAttribute("id"));
                }
                elementText.innerHTML = warnedElementsIds.join(", ");
                gElementText.appendChild(elementText);
                var closeWarning = function () {
                    closeRect.removeEventListener("click", closeWarning);
                    document.getElementById("warningContainer").parentNode.removeChild(document.getElementById("warningContainer"));
                };
            }
            ;
        }
        ;
    };
    ;
    UserInterface.prototype.newGame = function () {
        var level = document.getElementById("levelInput") ? Number(document.getElementById("levelInput").value) : 0;
        level > 99 ? level = 99 : level;
        var _this = userInterface || this;
        while (_this.menu.firstChild) {
            _this.menu.removeChild(_this.menu.firstChild);
        }
        ;
        var workaround = document.getElementById("music");
        workaround.play();
        if (volume == 0)
            volume = 100;
        game = new Tetris("gameArea", basicSquare, basicSquare, level);
        document.addEventListener('keyup', player.controls);
        document.addEventListener('keydown', player.controls);
        document.getElementById("mute").addEventListener("click", player.toggleMusic);
        document.getElementById("settings").addEventListener("click", userInterface.setUpSettings);
    };
    ;
    UserInterface.prototype.setUpGameOverMenu = function () {
        var g = document.createElementNS(this.svgns, "g");
        g.setAttribute("id", "gameOverContainer");
        userInterface.menu.appendChild(g);
        var text = document.createElementNS(this.svgns, "text");
        text.innerHTML = "Game Over";
        text.setAttribute("id", "gameOverText");
        g.appendChild(text);
        var gNewGame = document.createElementNS(this.svgns, "g");
        gNewGame.setAttribute("id", "newGame");
        g.appendChild(gNewGame);
        var whiteRect = document.createElementNS(this.svgns, "rect");
        whiteRect.setAttribute("fill", "white");
        whiteRect.setAttribute("style", "cursor:pointer");
        whiteRect.setAttribute("stroke", "black");
        whiteRect.setAttribute("width", "" + basicSquare * 3.5);
        whiteRect.setAttribute("height", "" + basicSquare);
        gNewGame.appendChild(whiteRect);
        var newGameText = document.createElementNS(this.svgns, "text");
        newGameText.setAttribute("style", "font-size:15px");
        newGameText.setAttribute("transform", "translate(" + basicSquare + ", " + basicSquare * 0.65 + ")");
        newGameText.innerHTML = "New Game";
        gNewGame.appendChild(newGameText);
        var gNewGamePath = document.createElementNS(this.svgns, "g");
        gNewGamePath.setAttribute("transform", "translate(30, 15)");
        gNewGame.appendChild(gNewGamePath);
        var newGamePath = document.createElementNS(this.svgns, "path");
        newGamePath.setAttribute("transform", "scale(0.015)");
        newGamePath.setAttribute("d", "M0 0q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z");
        gNewGamePath.appendChild(newGamePath);
        var newGameRect = document.createElementNS(this.svgns, "rect");
        newGameRect.setAttribute("fill", "transparent");
        newGameRect.setAttribute("style", "cursor:pointer");
        newGameRect.setAttribute("stroke", "black");
        newGameRect.setAttribute("width", "" + basicSquare * 3.5);
        newGameRect.setAttribute("height", "" + basicSquare);
        gNewGame.appendChild(newGameRect);
        newGameRect.addEventListener('click', userInterface.newGame);
        var gMainMenu = document.createElementNS(this.svgns, "g");
        gMainMenu.setAttribute("id", "mainMenu");
        g.appendChild(gMainMenu);
        var whiteRectMenu = document.createElementNS(this.svgns, "rect");
        whiteRectMenu.setAttribute("fill", "white");
        whiteRectMenu.setAttribute("style", "cursor:pointer");
        whiteRectMenu.setAttribute("stroke", "black");
        whiteRectMenu.setAttribute("width", "" + basicSquare * 3.5);
        whiteRectMenu.setAttribute("height", "" + basicSquare);
        gMainMenu.appendChild(whiteRectMenu);
        var mainMenuText = document.createElementNS(this.svgns, "text");
        mainMenuText.setAttribute("style", "font-size:15px");
        mainMenuText.setAttribute("transform", "translate(" + basicSquare + ", " + basicSquare * 0.65 + ")");
        mainMenuText.innerHTML = "Main Menu";
        gMainMenu.appendChild(mainMenuText);
        var gMainMenuPath = document.createElementNS(this.svgns, "g");
        gMainMenuPath.setAttribute("transform", "translate(30, 15)");
        gMainMenu.appendChild(gMainMenuPath);
        var mainMenuPath = document.createElementNS(this.svgns, "path");
        mainMenuPath.setAttribute("transform", "scale(0.015)");
        mainMenuPath.setAttribute("d", "M0 0q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z");
        gMainMenuPath.appendChild(mainMenuPath);
        var mainMenuRect = document.createElementNS(this.svgns, "rect");
        mainMenuRect.setAttribute("fill", "transparent");
        mainMenuRect.setAttribute("style", "cursor:pointer");
        mainMenuRect.setAttribute("stroke", "black");
        mainMenuRect.setAttribute("width", "" + basicSquare * 3.5);
        mainMenuRect.setAttribute("height", "" + basicSquare);
        gMainMenu.appendChild(mainMenuRect);
        mainMenuRect.addEventListener('click', userInterface.createMenu);
        var superbInterval = setInterval(function () {
            if (gameZone[0][9].getAttribute("fill") == gameOverFill) {
                text.setAttribute("class", "startRotationX");
                gNewGame.setAttribute("class", "startTranslationNewGame");
                gMainMenu.setAttribute("class", "startTranslationMainMenu");
            }
            ;
        }, 100);
    };
    ;
    return UserInterface;
}());
;
var Tetris = (function () {
    function Tetris(id, width, height, level) {
        this.tetrominos = [];
        this.svgns = "http://www.w3.org/2000/svg";
        this.id = id;
        this.width = width;
        this.height = height;
        this.maxWidth = width * (basicWidth + userInterfaceWidth);
        this.maxHeight = height * basicHeight;
        this.level = level;
        this.speed = 1000;
        this.updateSpeed();
        this.score = 0;
        this.createGameArea();
        this.spawnTetromino();
    }
    Tetris.prototype.createGameArea = function () {
        var svgArea = document.getElementById("svgArea");
        var g = document.createElementNS(this.svgns, "g");
        g.setAttribute("id", "gameZone");
        svgArea.appendChild(g);
        var gSideMenu = document.createElementNS(this.svgns, "g");
        gSideMenu.setAttribute("id", "sideMenu");
        gSideMenu.setAttribute("text-anchor", "middle");
        gSideMenu.setAttribute("transform", "translate(" + (this.width * basicWidth + 20) + ", " + basicSquare + ")");
        svgArea.appendChild(gSideMenu);
        this.setUpPreview();
        this.setUpOptions();
        this.displayScore();
        for (var i = 0; i < basicHeight; i++) {
            var newSquare;
            gameZone.push(new Array());
            for (var j = 0; j < basicWidth; j++) {
                newSquare = new BasicSquare(this.width * j, this.height * i, "basicSquare", "gameZone");
                gameZone[i].push(this.getHtmlSquare(newSquare));
            }
            ;
        }
        ;
        var rect = document.createElementNS(this.svgns, "rect");
        rect.setAttribute("id", "gameAreaRect");
        rect.setAttribute("width", g.getBBox().width.toString());
        rect.setAttribute("height", g.getBBox().height.toString());
        g.appendChild(rect);
    };
    ;
    Tetris.prototype.setUpPreview = function () {
        var height = basicSquare;
        var width = basicSquare;
        var gSideMenu = document.getElementById("sideMenu");
        var text = document.createElementNS(this.svgns, "text");
        text.setAttribute("transform", "translate(" + basicSquare * 2 + ")");
        text.innerHTML = "NEXT";
        gSideMenu.appendChild(text);
        var g = document.createElementNS(this.svgns, "g");
        g.setAttribute("id", "preview");
        g.setAttribute("transform", "translate(0, 10)");
        gSideMenu.appendChild(g);
        var newSquare;
        for (var i = 0; i < 4; i++) {
            previewZone.push(new Array());
            for (var j = 0; j < 4; j++) {
                newSquare = new BasicSquare(width * j, height * i, "previewSquare", "preview");
                previewZone[i].push(this.getHtmlSquare(newSquare));
            }
            ;
        }
        ;
        var rect = document.createElementNS(this.svgns, "rect");
        rect.setAttribute("id", "previewRect");
        rect.setAttribute("width", g.getBBox().width.toString());
        rect.setAttribute("height", g.getBBox().height.toString());
        g.appendChild(rect);
    };
    ;
    Tetris.prototype.displayScore = function () {
        var gSideMenu = document.getElementById("sideMenu");
        var g = document.createElementNS(this.svgns, "g");
        g.setAttribute("id", "info");
        g.setAttribute("transform", "translate(" + basicSquare * 2 + ", " + basicSquare * 7 + ")");
        gSideMenu.appendChild(g);
        var levelTitle = document.createElementNS(this.svgns, "text");
        levelTitle.setAttribute("id", "levelTitle");
        levelTitle.innerHTML = "LEVEL";
        g.appendChild(levelTitle);
        var level = document.createElementNS(this.svgns, "text");
        level.setAttribute("id", "level");
        level.setAttribute("y", basicSquare.toString());
        level.innerHTML = this.level.toString();
        g.appendChild(level);
        var scoreTitle = document.createElementNS(this.svgns, "text");
        scoreTitle.setAttribute("id", "scoreTitle");
        scoreTitle.setAttribute("y", (basicSquare * 2).toString());
        scoreTitle.innerHTML = "SCORE";
        g.appendChild(scoreTitle);
        var score = document.createElementNS(this.svgns, "text");
        score.setAttribute("id", "score");
        score.setAttribute("y", (basicSquare * 3).toString());
        score.innerHTML = this.score.toString();
        g.appendChild(score);
    };
    ;
    Tetris.prototype.setUpOptions = function () {
        var gSideMenu = document.getElementById("sideMenu");
        var g = document.createElementNS(this.svgns, "g");
        g.setAttribute("id", "options");
        g.setAttribute("transform", "translate(" + basicSquare + ", " + basicSquare * 5 + ")");
        gSideMenu.appendChild(g);
        var gMute = document.createElementNS(this.svgns, "g");
        gMute.setAttribute("id", "muteContainer");
        g.appendChild(gMute);
        var gMutePath = document.createElementNS(this.svgns, "g");
        gMutePath.setAttribute("transform", "translate(17, 10)");
        gMute.appendChild(gMutePath);
        var music = document.getElementById("music");
        var pathValues = music.muted ? "M0 0v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z" : "M0 0v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z";
        var muteBtn = document.createElementNS(this.svgns, "path");
        muteBtn.setAttribute("id", "mutePath");
        muteBtn.setAttribute("stroke", "black");
        muteBtn.setAttribute("transform", "scale(0.015)");
        muteBtn.setAttribute("d", pathValues);
        gMutePath.appendChild(muteBtn);
        var muteRect = document.createElementNS(this.svgns, "rect");
        muteRect.setAttribute("id", "mute");
        muteRect.setAttribute("width", basicSquare.toString());
        muteRect.setAttribute("height", basicSquare.toString());
        muteRect.setAttribute("fill", "transparent");
        muteRect.setAttribute("stroke", "black");
        muteRect.setAttribute("style", "cursor:pointer");
        gMute.appendChild(muteRect);
        var gControls = document.createElementNS(this.svgns, "g");
        gControls.setAttribute("id", "settingsContainer");
        gControls.setAttribute("transform", "translate(" + basicSquare + ", 0)");
        g.appendChild(gControls);
        var gControlsPath = document.createElementNS(this.svgns, "g");
        gControlsPath.setAttribute("transform", "translate(22, 18)");
        gControls.appendChild(gControlsPath);
        var settingsPath = document.createElementNS(this.svgns, "path");
        settingsPath.setAttribute("transform", "scale(0.015)");
        settingsPath.setAttribute("d", "M0 0q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z");
        gControlsPath.appendChild(settingsPath);
        var settingsRect = document.createElementNS(this.svgns, "rect");
        settingsRect.setAttribute("id", "settings");
        settingsRect.setAttribute("width", basicSquare.toString());
        settingsRect.setAttribute("height", basicSquare.toString());
        settingsRect.setAttribute("fill", "transparent");
        settingsRect.setAttribute("stroke", "black");
        settingsRect.setAttribute("style", "cursor:pointer");
        gControls.appendChild(settingsRect);
    };
    Tetris.prototype.getHtmlSquare = function (square) {
        return document.getElementById(square.id);
    };
    ;
    Tetris.prototype.updateScore = function () {
        var score = document.getElementById("score");
        score.innerHTML = this.score.toString();
        if ((700 * this.level) * (this.level / 2) <= this.score) {
            this.updateLevel();
        }
        ;
    };
    ;
    Tetris.prototype.updateLevel = function () {
        if (this.level < 99) {
            this.level++;
            var level = document.getElementById("level");
            level.innerHTML = this.level.toString();
            this.updateSpeed();
        }
        ;
    };
    ;
    Tetris.prototype.updateSpeed = function () {
        for (var i = 0; i < this.level; i++) {
            if (this.speed > 0) {
                this.speed = 1000;
                this.speed -= (100 * i);
            }
            ;
        }
        ;
    };
    ;
    Tetris.prototype.spawnTetromino = function () {
        var _this = game || this;
        var X = true;
        var O = false;
        var tetrominosSchematics = [
            new function () {
                this.id = "I";
                this.fill = "#00fdff";
                this.squareNbr = [[O, O, O, O],
                    [X, X, X, X],
                    [O, O, O, O],
                    [O, O, O, O]];
            },
            new function () {
                this.id = "O";
                this.fill = "#ffff00";
                this.squareNbr = [[O, X, X, O],
                    [O, X, X, O],
                    [O, O, O, O]];
            },
            new function () {
                this.id = "L";
                this.fill = "#ff8000";
                this.squareNbr = [[O, O, X],
                    [X, X, X],
                    [O, O, O]];
            },
            new function () {
                this.id = "J";
                this.fill = "#0000ff";
                this.squareNbr = [[X, O, O],
                    [X, X, X],
                    [O, O, O]];
            },
            new function () {
                this.id = "T";
                this.fill = "#f0f";
                this.squareNbr = [[O, X, O],
                    [X, X, X],
                    [O, O, O]];
            },
            new function () {
                this.id = "Z";
                this.fill = "#f00";
                this.squareNbr = [[X, X, O],
                    [O, X, X],
                    [O, O, O]];
            },
            new function () {
                this.id = "S";
                this.fill = "#0f0";
                this.squareNbr = [[O, X, X],
                    [X, X, O],
                    [O, O, O]];
            }
        ];
        var tetromino = tetrominosSchematics[Math.floor(Math.random() * tetrominosSchematics.length)];
        var id = tetromino.id;
        var fill = tetromino.fill;
        var squareNbr = tetromino.squareNbr;
        this.tetrominos.push(window["tetromino" + Tetromino.instances.toString()] = new Tetromino(id, fill, squareNbr));
        if (this.tetrominos.length < 2) {
            this.spawnTetromino();
        }
        else {
            if (!game) {
                var checkExist = setInterval(function () {
                    if (game) {
                        this.tetrominos[1].drawPreview();
                        this.tetrominos[0].draw(true);
                        clearInterval(checkExist);
                    }
                }, 10);
            }
            else {
                this.tetrominos[1].drawPreview();
                this.tetrominos[0].draw(true);
            }
            ;
        }
        ;
    };
    ;
    Tetris.prototype.checkLines = function (tetromino) {
        var _this = game || this;
        var rows = tetromino.map(function (x) { return x[0]; });
        rows = rows.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        var rowToStartAt = Math.min.apply(null, rows);
        var squaresToDelete = [];
        var stoppedSquares = Array.from(document.getElementsByClassName("basicSquare stopped"));
        var fullLine = false;
        var nbrLines = 0;
        for (var i = 0, e = rowToStartAt; i < rows.length; i++, e++) {
            for (var j = 0, c = 0; j < gameZone[e].length; j++, c++) {
                if (gameZone[e][c].getAttribute("class") != "basicSquare stopped") {
                    if (nbrLines == 0)
                        squaresToDelete = [];
                    fullLine = false;
                    break;
                }
                else {
                    squaresToDelete.push([e, c]);
                    fullLine = true;
                }
                ;
            }
            ;
            if (fullLine)
                nbrLines++;
        }
        ;
        if (nbrLines > 0) {
            var points = ({
                1: 40,
                2: 100,
                3: 300,
                4: 1200
            })[nbrLines];
            for (var k = 0; k < squaresToDelete.length; k++) {
                for (var o = squaresToDelete[k][0] - 1; o >= 0; o--) {
                    var classy = gameZone[o][squaresToDelete[k][1]].getAttribute("class");
                    var fill = gameZone[o][squaresToDelete[k][1]].getAttribute("fill");
                    gameZone[o + 1][squaresToDelete[k][1]].setAttribute("fill", fill);
                    gameZone[o + 1][squaresToDelete[k][1]].setAttribute("class", classy);
                    gameZone[o][squaresToDelete[k][1]].setAttribute("fill", noFill);
                    gameZone[o][squaresToDelete[k][1]].setAttribute("class", "basicSquare");
                }
                ;
            }
            ;
            var level = this.level < 26 ? this.level : 25;
            this.score += points * (level + 1);
            this.updateScore();
        }
        ;
    };
    ;
    Tetris.prototype.gameOver = function () {
        document.removeEventListener("keydown", player.controls);
        document.removeEventListener("keyup", player.controls);
        (function blackenRow(i) {
            setTimeout(function () {
                (function blackenCol(e) {
                    setTimeout(function () {
                        gameZone[i][e].setAttribute("fill", gameOverFill);
                        if (++e < gameZone[i].length)
                            blackenCol(e);
                    }, 15);
                }(0));
                if (--i > 0)
                    blackenRow(i);
            }, 200);
        }(gameZone.length));
        userInterface.setUpGameOverMenu();
    };
    ;
    return Tetris;
}());
;
var Tetromino = (function () {
    function Tetromino(id, fill, squareNbr) {
        this.squaresIndex = [];
        this.id = id + Tetromino.instances.toString();
        this.fill = fill;
        this.rotation = 0;
        this.squareNbrClass = squareNbr;
        this.createFromSquares();
        Tetromino.instances++;
        tetrominos.push(this);
    }
    Tetromino.prototype.draw = function (spawn) {
        currentTetromino = this;
        if (spawn && this.checkAll("top"))
            return game.gameOver();
        var i = 0;
        do {
            var col = this.squaresIndex[i][1];
            var row = this.squaresIndex[i][0];
            gameZone[row][col].setAttribute("fill", this.fill);
            gameZone[row][col].setAttribute("class", "basicSquare falling");
            i++;
        } while (i < this.squaresIndex.length);
        spawn && this.animate(game.speed);
    };
    ;
    Tetromino.prototype.drawPreview = function () {
        var i = 1;
        do {
            var c = 0;
            do {
                var row = this.squareNbrClass[i - 1] ? this.squareNbrClass[i - 1][c] : false;
                previewZone[i][c].setAttribute("class", "previewSquare");
                previewZone[i][c].setAttribute("fill", "none");
                if (row === true) {
                    previewZone[i][c].setAttribute("fill", this.fill);
                    previewZone[i][c].setAttribute("class", "previewSquare previewed");
                }
                ;
                c++;
            } while (c < previewZone[i].length);
            i++;
        } while (i < previewZone.length);
    };
    ;
    Tetromino.prototype.createFromSquares = function (row, col, spawn) {
        if (row === void 0) { row = 0; }
        if (col === void 0) { col = 0; }
        if (spawn === void 0) { spawn = true; }
        var squareArray = spawn ? this.squareNbrClass : this.rotatedSquares;
        var oldSquaresIndex;
        if (!spawn)
            oldSquaresIndex = this.squaresIndex;
        this.squaresIndex = [];
        var i = 0;
        for (i; i < gameZone.length; i++) {
            if (squareArray[i] === undefined)
                break;
            var e = 0;
            for (e; e < gameZone[i].length; e++) {
                if (squareArray[i][e] === undefined)
                    break;
                if (squareArray[i][e]) {
                    var colIndex = spawn ? e + Math.floor((gameZone[i].length) / 2 - squareArray[i].length / 2) : e + col;
                    var rowIndex = spawn ? i : i + row;
                    this.squaresIndex.push(new Array(rowIndex, colIndex));
                }
                ;
            }
            ;
        }
        ;
        if (!spawn) {
            if (this.checkAll("rotate")) {
                this.squaresIndex = oldSquaresIndex;
            }
            else {
                this.squareNbrClass = this.rotatedSquares;
                this.rotation += 90;
                if (this.rotation == 360)
                    this.rotation = 0;
            }
            ;
        }
        ;
    };
    ;
    Tetromino.prototype.animate = function (speed, scoreUp) {
        if (scoreUp === void 0) { scoreUp = false; }
        var _this = this;
        var readyToSpawn = 0;
        var tetromino = Array.from(document.getElementsByClassName("falling"));
        if (tetromino[0] === undefined)
            return;
        interval = setInterval(function () {
            if (scoreUp) {
                game.score++;
                game.updateScore();
            }
            ;
            var tetromino = Array.from(document.getElementsByClassName("falling"));
            var fill = tetromino[0].getAttribute("fill");
            var nextTetromino;
            var indexArray = _this.squaresIndex;
            if (!_this.checkAll("bottom")) {
                for (var e = 0; e < tetromino.length; e++) {
                    tetromino[e].setAttribute("fill", noFill);
                    tetromino[e].setAttribute("class", "basicSquare");
                }
                for (var i = indexArray.length - 1; i >= 0; i--) {
                    var row = indexArray[i][0];
                    var col = indexArray[i][1];
                    nextTetromino = gameZone[row + 1][col];
                    nextTetromino.setAttribute("fill", fill);
                    nextTetromino.setAttribute("class", "basicSquare falling");
                    indexArray[i][0] = row + 1;
                    indexArray[i][1] = col;
                }
            }
            else {
                if (player.moving) {
                    readyToSpawn = 0;
                }
                else {
                    readyToSpawn++;
                }
                if (readyToSpawn == 10) {
                    if (interval != undefined) {
                        clearInterval(interval);
                        interval = undefined;
                    }
                    for (var o = 0; o < indexArray.length; o++) {
                        row = indexArray[o][0];
                        col = indexArray[o][1];
                        nextTetromino = gameZone[row][col];
                        nextTetromino.setAttribute("fill", fill);
                        if (readyToSpawn == 10)
                            nextTetromino.setAttribute("class", "basicSquare stopped");
                    }
                    game.tetrominos.splice(0, 1);
                    game.checkLines(indexArray);
                    return game.spawnTetromino();
                }
            }
        }, speed);
    };
    ;
    Tetromino.prototype.rotate = function (squareNbr) {
        var rotatedArray = [];
        for (var i = squareNbr.length - 1; i >= 0; i--) {
            var failsafe = Array.prototype.slice.call(squareNbr[i]);
            var reverse = failsafe.reverse();
            for (var j = reverse.length - 1, e = 0; j >= 0; j--, e++) {
                if (i == squareNbr.length - 1)
                    rotatedArray.push([]);
                rotatedArray[e].push(reverse[j]);
            }
            ;
        }
        ;
        return rotatedArray;
    };
    ;
    Tetromino.prototype.checkAll = function (withWhat) {
        var collide;
        switch (withWhat) {
            case "top":
                for (var f = 0; f < this.squaresIndex.length; f++) {
                    var col = this.squaresIndex[f][1];
                    var row = this.squaresIndex[f][0];
                    if (gameZone[row][col].getAttribute("class") == "basicSquare stopped") {
                        try {
                            gameZone[row - 1][col].getAttribute("class") == "basicSquare stopped";
                        }
                        catch (err) {
                            collide = true;
                        }
                        try {
                            gameZone[row - 2][col].getAttribute("class") == "basicSquare stopped";
                        }
                        catch (err) {
                            collide = true;
                        }
                    }
                    ;
                }
                break;
            case "bottom":
                for (var f = 0; f < this.squaresIndex.length; f++) {
                    var col = this.squaresIndex[f][1];
                    var row = this.squaresIndex[f][0];
                    if (gameZone[row + 1] !== undefined) {
                        if (row + 1 > gameZone.length - 1
                            || gameZone[row + 1][col].getAttribute("class") == "basicSquare stopped") {
                            collide = true;
                        }
                        ;
                    }
                    else {
                        collide = true;
                    }
                }
                break;
            case "left":
                for (var f = 0; f < this.squaresIndex.length; f++) {
                    var col = this.squaresIndex[f][1];
                    var row = this.squaresIndex[f][0];
                    if (!gameZone[row][col - 1]) {
                        collide = true;
                    }
                }
                break;
            case "right":
                for (var f = 0; f < this.squaresIndex.length; f++) {
                    var col = this.squaresIndex[f][1];
                    var row = this.squaresIndex[f][0];
                    if (!gameZone[row][col + 1]) {
                        collide = true;
                    }
                }
                break;
            case "tetromino-left":
                for (var f = 0; f < this.squaresIndex.length; f++) {
                    var col = this.squaresIndex[f][1];
                    var row = this.squaresIndex[f][0];
                    if (gameZone[row]) {
                        if (gameZone[row][col - 1]) {
                            if (gameZone[row][col - 1].getAttribute("class") == "basicSquare stopped") {
                                collide = true;
                            }
                        }
                    }
                }
                break;
            case "tetromino-right":
                for (var f = 0; f < this.squaresIndex.length; f++) {
                    var col = this.squaresIndex[f][1];
                    var row = this.squaresIndex[f][0];
                    var squares = this.squaresIndex;
                    if (gameZone[row]) {
                        if (gameZone[row][col + 1]) {
                            if (gameZone[row][col + 1].getAttribute("class") == "basicSquare stopped") {
                                collide = true;
                            }
                        }
                    }
                }
                break;
            case "rotate":
                var rotation = this.rotation + 90;
                if (rotation == 360)
                    rotation = 0;
                var units = ({
                    3: {
                        90: {
                            x: [0, -1, -1, 0, -1],
                            y: [0, 0, -1, 2, 2]
                        },
                        180: {
                            x: [0, 1, 1, 0, 1],
                            y: [0, 0, 1, -2, -2]
                        },
                        270: {
                            x: [0, 1, 1, 0, 1],
                            y: [0, 0, -1, 2, 2]
                        },
                        0: {
                            x: [0, -1, -1, 0, -1],
                            y: [0, 0, 1, -2, -2]
                        }
                    },
                    4: {
                        90: {
                            x: [0, -2, 1, 1, -2],
                            y: [0, 0, 0, -2, 1]
                        },
                        180: {
                            x: [0, -1, 2, -1, 1],
                            y: [0, 0, 0, -2, 1]
                        },
                        270: {
                            x: [0, 2, -1, 2, -1],
                            y: [0, 0, 0, -1, 1]
                        },
                        0: {
                            x: [0, -2, 1, -2, 1],
                            y: [0, 0, 0, -1, 2]
                        }
                    }
                })[this.squareNbrClass.length][rotation];
                var calc = new function () {
                    this.resultx = 0;
                    this.resulty = 0;
                    this.run = function (a, b) {
                        var indexes = a;
                        var _a = [];
                        for (var i = 0; i < b.x.length && i < b.y.length; i++) {
                            var noCollide = 0;
                            var yOffset = 0;
                            var xOffset = 0;
                            var testResulty = indexes[a.length - 1][0] + b.y[i];
                            var cols = indexes.map(function (x) { return x[1]; });
                            var testResultx = Math.max.apply(null, cols);
                            for (var f = 0; f < a.length; f++) {
                                var col = indexes[f][1];
                                var row = indexes[f][0];
                                var _thisresulty = this.resulty;
                                var _thisresultx = this.resultx;
                                var testBorders = function (resultx, resulty) {
                                    if (yOffset != a.length * -1 && !gameZone[resulty]) {
                                        yOffset--;
                                        resulty += 1;
                                    }
                                    ;
                                    if (xOffset != a.length * -1 && (!gameZone[0][resultx])) {
                                        xOffset--;
                                        resultx -= 1;
                                    }
                                    ;
                                    if (gameZone[resulty] && gameZone[0][resultx]) {
                                        _thisresulty = row + b.y[i] + yOffset;
                                        _thisresultx = col + b.x[i] + xOffset;
                                    }
                                    else if (xOffset == a.length * -1 && yOffset == a.length * -1) {
                                        return;
                                    }
                                    else {
                                        testBorders(resultx, resulty);
                                    }
                                    ;
                                };
                                if ((f == 0) && (!gameZone[testResulty] || !gameZone[0][testResultx])) {
                                    testBorders(testResultx, testResulty);
                                }
                                ;
                                _thisresulty = row + b.y[i] + yOffset;
                                _thisresultx = col + b.x[i] + xOffset;
                                if (gameZone[_thisresulty] && gameZone[_thisresulty][_thisresultx] && gameZone[_thisresulty][_thisresultx].getAttribute("class") != "basicSquare stopped") {
                                    _a.push(new Array(_thisresulty, _thisresultx));
                                    noCollide++;
                                }
                                else {
                                    collide = true;
                                    _a.push(new Array(_thisresulty, _thisresultx));
                                    _a = [];
                                    break;
                                }
                                ;
                            }
                            ;
                            if (noCollide == a.length) {
                                collide = false;
                                return _a;
                            }
                            ;
                        }
                        ;
                        _a = undefined;
                    };
                };
                var _thisSquaresIndex = this.squaresIndex;
                if (!collide) {
                    this.squaresIndex = calc.run(_thisSquaresIndex, units);
                }
                ;
                if (this.squaresIndex === undefined)
                    this.squaresIndex = _thisSquaresIndex;
                break;
            default:
                collide = false;
                break;
        }
        ;
        if (collide === undefined)
            collide = false;
        return collide;
    };
    ;
    Tetromino.prototype.findOutermostSquare = function (angle) {
        var localArray = [];
        if (angle == 0 || angle == 180) {
            for (var i = 0; i < this.squareNbrClass.length; i++) {
                var isTrue = 0;
                for (var e = 0; e < this.squareNbrClass[i].length; e++) {
                    if (this.squareNbrClass[i][e] === true) {
                        isTrue = e;
                    }
                    ;
                }
                ;
                localArray.push(isTrue);
            }
            ;
            var outermost = Math.max.apply(null, localArray);
            if (this.id.indexOf("I") != -1)
                outermost *= -1;
            else if (this.id.indexOf("J") != -1 || this.id.indexOf("L") != -1)
                outermost = (outermost - 1) * -1;
            else
                outermost = (outermost - 1) * -1;
        }
        else if (angle == 90 || angle == 270) {
            for (var i = 0; i < this.squareNbrClass.length; i++) {
                var isTrue = 0;
                for (var e = 0; e < this.squareNbrClass[i].length; e++) {
                    if (this.squareNbrClass[i][e] === true) {
                        isTrue = e;
                    }
                    ;
                }
                ;
                localArray.push(isTrue);
            }
            ;
            var outermost = Math.max.apply(null, localArray);
            if (this.id.indexOf("I") != -1)
                outermost *= 1;
            else if (angle == 90)
                outermost = (outermost - 2) * -1;
            else if (angle == 270)
                outermost = outermost - 1;
        }
        ;
        return outermost;
    };
    ;
    Tetromino.instances = 0;
    return Tetromino;
}());
;
var Player = (function () {
    function Player(rotateCode, leftCode, rightCode, dropCode, muteCode, rotate, left, right, drop, mute) {
        this.rotate = rotate;
        this.left = left;
        this.right = right;
        this.drop = drop;
        this.mute = mute;
        this.rotateCode = rotateCode;
        this.leftCode = leftCode;
        this.rightCode = rightCode;
        this.dropCode = dropCode;
        this.muteCode = muteCode;
        this.moving = false;
    }
    ;
    Player.prototype.toggleMusic = function () {
        var music = document.getElementById("music");
        var muteIcon = document.getElementById("mutePath");
        switch (music.muted) {
            case true:
                music.muted = false;
                if (muteIcon)
                    muteIcon.setAttribute("d", "M0 0v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z");
                break;
            case false:
                music.muted = true;
                if (muteIcon)
                    muteIcon.setAttribute("d", "M0 0v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z");
                break;
        }
        ;
    };
    ;
    Player.prototype.toggleSettingsMenu = function () {
        var _thisTetromino = currentTetromino;
    };
    Player.prototype.controls = function (event) {
        var tetromino = Array.from(document.getElementsByClassName("falling"));
        var fill;
        if ((event.key || event.which) != 77 && tetromino[0] !== undefined) {
            fill = tetromino[0].getAttribute("fill");
        }
        ;
        var _thisTetromino = currentTetromino;
        var indexes = _thisTetromino.squaresIndex;
        var timeout;
        var timer = 200;
        switch ((event.keyCode || event.which) + " | " + event.type) {
            case player.leftCode + " | keydown":
                event.preventDefault();
                if (!_thisTetromino.checkAll("tetromino-left") && !_thisTetromino.checkAll("left")) {
                    player.moving = true;
                    if (timeout)
                        clearTimeout(timeout);
                    for (var e = 0; e < indexes.length; e++) {
                        tetromino[e].setAttribute("fill", noFill);
                        tetromino[e].setAttribute("class", "basicSquare");
                    }
                    for (var i = 0; i < indexes.length; i++) {
                        var col = indexes[i][1];
                        var row = indexes[i][0];
                        var nextTetromino = gameZone[row][col - 1];
                        nextTetromino.setAttribute("fill", fill);
                        nextTetromino.setAttribute("class", "basicSquare falling");
                        indexes[i][0] = row;
                        indexes[i][1] = col - 1;
                    }
                    timeout = setTimeout(function () {
                        player.moving = false;
                    }, timer);
                }
                ;
                break;
            case player.rightCode + " | keydown":
                event.preventDefault();
                if (!_thisTetromino.checkAll("tetromino-right") && !_thisTetromino.checkAll("right")) {
                    player.moving = true;
                    if (timeout)
                        clearTimeout(timeout);
                    for (var e = 0; e < indexes.length; e++) {
                        tetromino[e].setAttribute("fill", noFill);
                        tetromino[e].setAttribute("class", "basicSquare");
                    }
                    ;
                    for (var i = 0; i < indexes.length; i++) {
                        var col = indexes[i][1];
                        var row = indexes[i][0];
                        var nextTetromino = gameZone[row][col + 1];
                        nextTetromino.setAttribute("fill", fill);
                        nextTetromino.setAttribute("class", "basicSquare falling");
                        indexes[i][0] = row;
                        indexes[i][1] = col + 1;
                    }
                    ;
                    timeout = setTimeout(function () {
                        player.moving = false;
                    }, timer);
                }
                ;
                break;
            case player.dropCode + " | keyup":
                event.preventDefault();
                clearInterval(interval);
                interval = undefined;
                _thisTetromino.animate(0, true);
                break;
            case player.dropCode + " | keydown":
                event.preventDefault();
                break;
            case player.rotateCode + " | keyup":
                event.preventDefault();
                if (_thisTetromino.id.indexOf("O") != -1)
                    return;
                var offsetRow = 0;
                var offsetCol = 0;
                console.log(_thisTetromino);
                _thisTetromino.rotatedSquares = _thisTetromino.rotate(_thisTetromino.squareNbrClass);
                player.moving = true;
                offsetRow = _thisTetromino.findOutermostSquare(_thisTetromino.rotation);
                if (timeout)
                    clearTimeout(timeout);
                for (var e = 0; e < indexes.length; e++) {
                    tetromino[e].setAttribute("fill", noFill);
                    tetromino[e].setAttribute("class", "basicSquare");
                }
                ;
                var cols = indexes.map(function (x) { return x[1]; });
                var rows = indexes.map(function (x) { return x[0]; });
                var smallRow = Math.min.apply(null, rows) + offsetRow;
                var smallCol = Math.min.apply(null, cols) + offsetCol;
                _thisTetromino.createFromSquares(smallRow, smallCol, false);
                _thisTetromino.draw(false);
                timeout = setTimeout(function () {
                    player.moving = false;
                }, timer);
                break;
            case player.muteCode + " | keydown":
                event.preventDefault();
                player.toggleMusic();
                break;
        }
        ;
    };
    ;
    return Player;
}());
;
var gameZone = [];
var gameZoneObjects = [];
var previewZone = [];
var tetrominos = [];
var currentTetromino;
var interval;
var basicSquare = 35;
var basicWidth = 10;
var basicHeight = 20;
var userInterfaceWidth = 5;
var volume = 100;
var noFill = "rgba(0,163,191,.16)";
var defaultStroke = "rgba(0,0,0,.67)";
var gameOverFill = "rgba(0,0,0,.55)";
var game;
var player;
var userInterface = new UserInterface("svgArea", basicSquare, basicSquare);
var player = new Player(38, 37, 39, 40, 77, "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown", "m");
document.addEventListener("keyup", fuckEverything);
function fuckEverything(event) {
    if (event.key == "p") {
        game.spawnTetromino = undefined;
    }
    ;
}
;
