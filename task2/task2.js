
var x1 = 0;
var y1 = 0;
var x2 = prompt("Value of x2 type here:", "0");
var y2 = prompt("Value of y2 type here:", "0");
var xdiff = x2 - x1;
var ydiff = y2 - y1;
var result = Math.pow(Math.pow(xdiff, 2)+Math.pow(ydiff, 2), 0.5);

alert("The distance between pointsA(" +x1 + "," +y1+ ") and B("+x2+ ","+y2+") is "+result);

