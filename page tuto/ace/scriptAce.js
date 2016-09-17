		var editor = ace.edit("editor");
	    ace.require('ace/ext/settings_menu').init(editor);
	    editor.setTheme("ace/theme/monokai");
	    editor.session.setMode("ace/mode/svg");
	    editor.setValue("<?xml version=\"1.0\" standalone=\"no\"?>");
	    editor.setReadOnly(true);
		editor.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor) {
				editor.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor1 = ace.edit("editor1");
	    ace.require('ace/ext/settings_menu').init(editor1);
	    editor1.setTheme("ace/theme/monokai");
	    editor1.session.setMode("ace/mode/svg");
	    editor1.setValue("\<!DOCTYPE svg public\> \"-//W3C//DTD SVG 1.1//EN\"  \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">");
	    editor1.setReadOnly(true);
		editor1.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor1) {
				editor1.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor2 = ace.edit("editor2");
	    ace.require('ace/ext/settings_menu').init(editor2);
	    editor2.setTheme("ace/theme/monokai");
	    editor2.session.setMode("ace/mode/svg");
	    editor2.setValue("<svg></svg>");
	    editor2.setReadOnly(true);
		editor2.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor2) {
				editor2.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor3 = ace.edit("editor3");
	    ace.require('ace/ext/settings_menu').init(editor3);
	    editor3.setTheme("ace/theme/monokai");
	    editor3.session.setMode("ace/mode/svg");
	    editor3.setValue("<?xml version=\"1.0\"standalone=\"no\"?>\n<!DOCTYPE svg public\"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"width=\"500\" height=\"500\"></svg>");
	    editor3.setReadOnly(true);
		editor3.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor3) {
				editor3.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor4 = ace.edit("editor4");
	    ace.require('ace/ext/settings_menu').init(editor1);
	    editor4.setTheme("ace/theme/monokai");
	    editor4.session.setMode("ace/mode/svg");
	    editor4.setValue("<rect x y height width/>");
	    editor4.setReadOnly(true);
		editor4.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor4) {
				editor4.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor5 = ace.edit("editor5");
	    ace.require('ace/ext/settings_menu').init(editor5);
	    editor5.setTheme("ace/theme/monokai");
	    editor5.session.setMode("ace/mode/svg");
	    editor5.setValue("<ellipse rx xy cx cy />");
	    editor5.setReadOnly(true);
		editor5.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor5) {
				editor5.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor6 = ace.edit("editor6");
	    ace.require('ace/ext/settings_menu').init(editor6);
	    editor6.setTheme("ace/theme/monokai");
	    editor6.session.setMode("ace/mode/svg");
	    editor6.setValue("<circle cx cy r />");
	    editor6.setReadOnly(true);
		editor6.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor6) {
				editor6.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor7 = ace.edit("editor7");
	    ace.require('ace/ext/settings_menu').init(editor7);
	    editor7.setTheme("ace/theme/monokai");
	    editor7.session.setMode("ace/mode/svg");
	    editor7.setValue("<line  x1 y1 x2 y2 />");
	    editor7.setReadOnly(true);
		editor7.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor7) {
				editor7.showSettingsMenu();
			},
			readOnly: false
		}]);
		/*var editor8 = ace.edit("editor8");
	    ace.require('ace/ext/settings_menu').init(editor8);
	    editor8.setTheme("ace/theme/monokai");
	    editor8.session.setMode("ace/mode/svg");
	    editor8.setValue("<path d=\"M0,0 50,50 t30,30 80,80\" />");
	    editor8.setReadOnly(true);
		editor8.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor8) {
				editor8.showSettingsMenu();
			},
			readOnly: false
		}]);*/
		var editor9 = ace.edit("editor9");
	    ace.require('ace/ext/settings_menu').init(editor9);
	    editor9.setTheme("ace/theme/monokai");
	    editor9.session.setMode("ace/mode/svg");
	    editor9.setValue("<animate></animate>");
	    editor9.setReadOnly(true);
		editor9.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor9) {
				editor9.showSettingsMenu();
			},
			readOnly: false
		}]);
		var editor12 = ace.edit("editor12");
	    ace.require('ace/ext/settings_menu').init(editor12);
	    editor12.setTheme("ace/theme/monokai");
	    editor12.session.setMode("ace/mode/svg");
	    editor12.setValue("<text x=\"20\" y=\"20\"></text>");
	    editor12.setReadOnly(true);
		editor12.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor12) {
				editor12.showSettingsMenu();
			},
			readOnly: false
		}]);
			var editor13 = ace.edit("editor13");
	    ace.require('ace/ext/settings_menu').init(editor13);
	    editor13.setTheme("ace/theme/monokai");
	    editor13.session.setMode("ace/mode/svg");
	    editor13.setValue("<polyline points=\"50,50 200,100 20,200 200,40 300,50 400,60\"/>");
	    editor13.setReadOnly(true);
		editor13.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor13) {
				editor13.showSettingsMenu();
			},
			readOnly: false
		}]);
			var editor14 = ace.edit("editor14");
	    ace.require('ace/ext/settings_menu').init(editor14);
	    editor14.setTheme("ace/theme/monokai");
	    editor14.session.setMode("ace/mode/svg");
	    editor14.setValue("<polygon points=\"0,0 40,20 20,20 20,40 30,50 40,60\" />");
	    editor14.setReadOnly(true);
		editor14.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor14) {
				editor14.showSettingsMenu();
			},
			readOnly: false
		}]);
			var editor15 = ace.edit("editor15");
	    ace.require('ace/ext/settings_menu').init(editor15);
	    editor15.setTheme("ace/theme/monokai");
	    editor15.session.setMode("ace/mode/svg");
	    editor15.setValue("<path d=\"M100,500\" />");
	    editor15.setReadOnly(true);
		editor15.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor15) {
				editor15.showSettingsMenu();
			},
			readOnly: false
		}])
			var editor16 = ace.edit("editor16");
	    ace.require('ace/ext/settings_menu').init(editor16);
	    editor16.setTheme("ace/theme/monokai");
	    editor16.session.setMode("ace/mode/svg");
	    editor16.setValue("<path d=\"M100,100 l400,150\"/>");
	    editor16.setReadOnly(true);
		editor16.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor16) {
				editor16.showSettingsMenu();
			},
			readOnly: false
		}])
				var editor17 = ace.edit("editor17");
	    ace.require('ace/ext/settings_menu').init(editor17);
	    editor17.setTheme("ace/theme/monokai");
	    editor17.session.setMode("ace/mode/svg");
	    editor17.setValue("<path d=\"M200,200 l10,10 h10,20 v50,20 z\"/>");
	    editor17.setReadOnly(true);
		editor17.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor17) {
				editor17.showSettingsMenu();
			},
			readOnly: false
		}])
				var editor18 = ace.edit("editor18");
	    ace.require('ace/ext/settings_menu').init(editor18);
	    editor18.setTheme("ace/theme/monokai");
	    editor18.session.setMode("ace/mode/svg");
	    editor18.setValue("<path d=\"M200,450 a25,100 -30 0,1 50,-25\" />");
	    editor18.setReadOnly(true);
		editor18.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor18) {
				editor18.showSettingsMenu();
			},
			readOnly: false
		}])
		var editor19 = ace.edit("editor19");
	    ace.require('ace/ext/settings_menu').init(editor19);
	    editor19.setTheme("ace/theme/monokai");
	    editor19.session.setMode("ace/mode/svg");
	    editor19.setValue("<animateMotion d=\"M200,300 t200,300 \"/> ");
	    editor19.setReadOnly(true);
		editor19.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor19) {
				editor19.showSettingsMenu();
			},
			readOnly: false
		}])
			var editor20 = ace.edit("editor20");
	    ace.require('ace/ext/settings_menu').init(editor20);
	    editor20.setTheme("ace/theme/monokai");
	    editor20.session.setMode("ace/mode/svg");
	    editor20.setValue("<animateMotion>");
	    editor20.setReadOnly(true);
		editor20.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor20) {
				editor20.showSettingsMenu();
			},
			readOnly: false
		}])
		var editor21 = ace.edit("editor21");
	    ace.require('ace/ext/settings_menu').init(editor21);
	    editor21.setTheme("ace/theme/monokai");
	    editor21.session.setMode("ace/mode/svg");
	    editor21.setValue("<animateTransform>");
	    editor21.setReadOnly(true);
		editor21.commands.addCommands([{
			name: "showSettingsMenu",
			bindKey: {win: "Ctrl-q", mac: "Command-q"},
			exec: function(editor21) {
				editor21.showSettingsMenu();
			},
			readOnly: false
		}])
	