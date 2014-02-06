(function(global) {
  var MelbOfficeMap = {
    VERSION: '0.0.1',
    requires: ["raphael ~2.1.2 http://raphaeljs.com/"],

    render: function(elementId, width, height, toScale) {

    	if(typeof(toScale)==='undefined') toScale = true;

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
				plant.attr("fill", "#006400");
				plant.attr("stroke", 0.5);
			}

			function polygonToPath(polygon) {
				return polygon.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) {
    			return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';
				}).replace(/^L/, 'M') + 'Z';
			}

			var paper = Raphael(elementId, width, height);

			if(toScale) {

				//A 'to scale' dataset
				//sourceWidth = 1191;
				//sourceHeight = 842;
				p1 = {name: 'boardRoom', path: polygonToPath("533.438,174.333 444.271,159.833 442.771,167.083 441.271,236.667 442.104,243 533.438,234.167 533.438,229.5 532.104,219.167 531.701,201.417 532.457,184.835")};
				p2 = {name: 'room1', path: polygonToPath("533.438,237.667 497.188,241.167 504.75,272.292 537.5,264.167 534.812,249")};
				p3 = {name: 'room2', path: polygonToPath("538.187,268.913 506.533,276.992 513.708,306.542 546.939,294.004 542.167,281.5")};
				p4 = {name: 'auditorium', path: polygonToPath("429.688,252.625 471.625,249.417 488.5,318.167 463.188,327.5 460.938,323.5 448.188,327.75 450.25,332.833 354,370.333 351.938,364.25 344.938,344.5 338.688,324.25 334.188,306.75 331.188,286.25 327.188,265.75 325.438,247.5 322.438,247.5 321.062,228.125 404.015,225.167 406.084,256.412 410.312,256 408.188,222.25 408.5,177.167 388,174.917 389.438,161.25 434.188,167 433.438,237.25 428.555,237.813")};
				p5 = {name: 'leftStoreRoom', path: polygonToPath("322.188,173.75 340.188,175 341.938,168.5 366.938,173 366.938,177 400.188,180.5 400.188,205 403.969,205.27 404.015,220.237 320.438,223 320.438,197.625")};
				p6 = {name: 'leftWing', path: polygonToPath("356.098,376.167 451.931,337.833 453.771,342 466.438,337 464.756,332.732 494.5,321.167 475.293,243.761 492.333,241.833 510.333,313 548.812,298.5 554.104,312 561.938,326.833 570.438,340.333 574.229,345.667 460.083,429 452.667,416.833 393.688,455.75 382.438,438 385.688,435.5 376.438,419 373.688,420.25 364.122,402.397 355.289,383.397 358.771,382.083")};
				p7 = {name: 'phoneBooth', path: polygonToPath("456,431.625 450.917,423.292 431.167,436.667 436.833,445")};
				p8 = {name: 'foyer', path: polygonToPath("440.062,449.75 485.938,416 562.438,492.375 528.312,538.625 492.188,508.375 465.863,481.75")};
				p9 = {name: 'kitchen', path: polygonToPath("577.688,349.125 542.938,374.625 548.812,382.625 509.812,411.25 511.562,413.625 564.188,466.375 566.438,468.375 586.812,440.875 595.438,447.375 629.188,401.375 620.812,395.75 612.312,389 600.312,377.375 588.438,365.25 582.438,357.375")};
				p10 = {name: 'rightWing', path: polygonToPath("633.083,404.938 532.333,541.688 544.438,549.5 619.021,583.833 621.771,576.5 672.354,592.667 677.812,572.125 678.812,564.25 721.562,570 738.562,445.75 728.562,444.125 712.312,441.125 697.312,436.875 686.312,432.75 676.312,428.875 667.312,425 651.812,416.875 637.938,408.75")};
				p11 = {name: 'serverRoom', path: polygonToPath("541.333,554.667 522.104,584.667 539.438,595.5 541.104,592.667 553.271,598.5 569.5,566.833")};
				p12 = {name: 'room5', path: polygonToPath("575,569.5 559.271,601 576.938,610.333 595.938,619 595.938,620 602.604,623 616,588.167")};
				p13 = {name: 'room4', path: polygonToPath("624.448,583.75 607.552,625.333 611.938,626.5 612.604,626.5 631.771,632.333 652.438,638.5 652.438,639.833 659.438,641.333 670.333,598.5")};
				p14 = {name: 'boardRoom2', path: polygonToPath("682.5,574.667 755,585.526 752.667,658.359 729.913,657.179 729.912,653.811 711.604,651.917 711.738,650.379 669.604,643.333 669.604,644.333 665.667,642.667")};
				p15 = {name: 'rightStoreRoom', path: polygonToPath("760.104,585.167 797.938,585.167 803.219,657.562 758.271,658.719")};
				p16 = {name: 'specialHallway', path: polygonToPath("739.438,492 761.562,492 759.688,538.875 809.562,538 815.688,590.25 803.219,591.375 802.71,581 759.312,581.739 738.562,578.864 739.938,572.75 728.01,570.671 730.667,550.625 739.765,551.033 741.062,537.5 735.062,536.5")};
				p17 = {name: 'room3', path: polygonToPath("766.594,491.086 765,532.831 809.188,532.667 816.812,531.542 810.188,490.625")};
				p18 = {name: 'projectRoom', path: polygonToPath("809.938,485 803.562,445.75 793.438,446.875 776.562,448 759.812,447.625 749.438,447.125 744.312,446.625 739.812,486.5")};
				
				var natural_x_bound=690;
				var natural_y_bound=310;

				var scale_x = width / natural_x_bound;
				var scale_y = height / natural_y_bound;
				var x_bound = natural_x_bound * scale_x;
				var y_bound = natural_y_bound * scale_y;
				var backing = paper.path("M0 0,L"+x_bound+" 0,L"+x_bound+" "+y_bound+",L0 "+y_bound+"Z");
				backing.node.id = 'backing';
				backing.attr("fill","#eee");

				[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18].forEach(function(element, index, array) {
					var i = paper.path(element['path']);
					i.node.id = element['name'];
					var scale_center = "135,260"; //Magic center
					var scale_factors = scale_x+","+scale_y;
					i.transform("S"+scale_factors+","+scale_center+"r-45,520,520T-130,-260");
					i.attr("fill","#fff");
				});

			} else {
				//This version will most likely be deprecated
			// Creates canvas in #layout at 10, 50
			// var paper = Raphael(elementId, width, height);

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
				makeRoom('projectRoom',[width*0.77,height*0.79,width*0.13,height*0.21]);
				makeRoom('room5',[width*0.69,height*0.84,width*0.08,height*0.16]);
				makeRoom('room6',[width*0.61,height*0.86,width*0.08,height*0.14]);
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
  }
}

if (global.MelbOfficeMap) {
  throw new Error('MelbOfficeMap has already been defined');
} else {
  global.MelbOfficeMap = MelbOfficeMap;
}


})(typeof window === 'undefined' ? this : window);

