
var fs = require("fs");
var originalMap = fs.readFileSync("data/map-08.txt").toString();
var mapArray = originalMap.split("\n");
var	colCounter = 0;
var yAxis = 0;
var xAxis = -1;
var coordinates = 0;


// Function that finds the number of columns in the Map
// Initially was meant to find the limit on the split
// but totally unnecessary to use
// function numColumn () {
// 	while (originalMap.charAt(colCounter) != "\n") {
// 		colCounter++;cd 
// 	}
// 	return colCounter; 
// }

// numColumn();


for (var count = 0; count < mapArray.length; count++) {
	mapArray[count] = mapArray[count].split('');
}

while (xAxis == -1) {
	yAxis++;
	xAxis = mapArray[yAxis].indexOf("X");
}

//As a check to see original map and the one built with the full Array
//console.log (originalMap);
//console.log (mapArray);
console.log ("[",xAxis-1,", ", -(yAxis-1), "]");
