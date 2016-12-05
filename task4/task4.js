var str = "# # # # #";
var i = 0;
while (i<7){
    if (!(i%2)){
        console.log(str);
    } else {
        console.log(" " + str);
    }
    i++;
}
