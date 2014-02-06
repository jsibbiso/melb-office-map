(function(global) {
  var MelbOfficeMap = {
    VERSION: '0.0.1',
    requires: ["raphael ~2.1.2 http://raphaeljs.com/"],

    render: function(elementId, width, height) {

			function makeRoom(id, dim) {
				//Add attribute hash to apply
				//each -> circle.attr("fill", "#f00");
				var room = paper.rect(dim[0],dim[1],dim[2],dim[3]);
				room.node.id = id;
				return room;
			}

			function makeWall(id, dim) {
				//Add attribute hash to apply
				//each -> circle.attr("fill", "#f00");
				var room = paper.rect(dim[0],dim[1],dim[2],dim[3]);
				room.node.id = id;
				room.attr({fill: 'black'});
				return room;
			}

			function makeTable(id, dim, angle) {
				var room = paper.rect(dim[0],dim[1],dim[2],dim[3]);
				room.node.id = id;
				room.attr({fill: '#eee', stroke: 0.5});
				room.transform("r"+angle);
				return room;
			}

			function makePlant(id, loc) {
				var plant = paper.circle(loc[0],loc[1],10);
				plant.node.id =id;
				plant.attr("fill", "#88DD88");
				plant.attr("stroke", 0.5);
			}

			// Creates canvas in #layout at 10, 50
			var paper = Raphael(elementId, width, height);

			var officeOutline = paper.path("M0 0,C0 0 "+width/2+" "+height/6+" "+width+" 0,"
				+"L"+width+' '+height+","
				+"L"+width*0.5+' '+height+","
				+"M"+width*0.45+" "+height+","
				+"L 0 "+height+","
				+"L0 0");
			var frontDoor = paper.path("M"+width*0.45+" "+height+",L"+width*0.5+" "+height*0.95);

			makeRoom('phoneBooth',[width*0.38,height*0.89,width*0.03,height*0.11]);
			makeRoom('auditorium',[0,height*0.4,width*0.25,height*0.6]);
			makeRoom('boardRoom',[0,height*0.03,width*0.11,height*0.37]);
			makeRoom('room1',[width*0.11,height*0.04,width*0.07,height*0.26]);
			makeRoom('room2',[width*0.18,height*0.05,width*0.07,height*0.25]);
			makeRoom('room3',[width*0.8,height*0.05,width*0.2,height*0.33]);
			makeRoom('room4',[width*0.85,height*0.38,width*0.15,height*0.27]);
			makeRoom('storeRoom',[width*0.9,height*0.79,width*0.1,height*0.21]);
			makeRoom('boardRoom2',[width*0.77,height*0.79,width*0.13,height*0.21]);
			makeRoom('room6',[width*0.69,height*0.84,width*0.08,height*0.16]);
			makeRoom('room7',[width*0.61,height*0.86,width*0.08,height*0.14]);
			makeRoom('serverRoom',[width*0.56,height*0.86,width*0.05,height*0.14]);

			makeWall('outerWall',[width*0.77,height*0.05,width*0.03,height*0.6]);
			makeWall('kitchedWall1',[width*0.4,height*0.3,width*0.015,height*0.35]);
			makeWall('kitchedWall2',[width*0.53,height*0.3,width*0.015,height*0.35]);
			makeWall('kitchedWall3',[width*0.4,height*0.635,width*0.13,height*0.015]);

			makeTable('table1',[width*0.32,height*0.06,width*0.04,height*0.6],2);
			makeTable('table2',[width*0.58,height*0.07,width*0.04,height*0.59],-2);
			makeTable('table3',[width*0.68,height*0.06,width*0.04,height*0.6],-2);
			makeTable('portableTable',[width*0.43,height*0.15,width*0.08,height*0.1],0);
			makeTable('kitchenTable',[width*0.43,height*0.4,width*0.08,height*0.1],0);

			makePlant('plant1',[width*0.27,height*0.09]);
			makePlant('plant2',[width*0.75,height*0.09]);
			makePlant('plant3',[width*0.535,height*0.675]);
			makePlant('plant4',[width*0.415,height*0.675]);
    }
  };

  if (global.MelbOfficeMap) {
    throw new Error('MelbOfficeMap has already been defined');
  } else {
    global.MelbOfficeMap = MelbOfficeMap;
  }


})(typeof window === 'undefined' ? this : window);

