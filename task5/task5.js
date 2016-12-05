// // a() => 5
function a() {
    return 5;
}

// b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10
function sum(a, b) {
    return a + b;
}

// c(2,2) => 4, c(3,3) => 27, b(4,5) => 1024
function mathPow(x, y) {
    return Math.pow(x, y);
}

// d(1) => {a:1}, b(123) => {a:123}
function d(prop) {
   var Obj = {a: prop};
    return Obj;
}

// e(55)() => 55, e(123)() => 123
function e(x) {
    return function () {
        return x;
    }
}

// f(1,3) => [1,1,1], b('x',5) => ['x','x','x','x','x'], b(-1,2) => [-1,-1]
function f(a, b) {
    var arr = [];
    if (b < 0) {
        alert('second argument can`t  be less than 0 ')
    };
    for (var i = 0; i < b; i++) {
        arr.push(a);
    }
    return arr;
}

// h(function(){return 5}) => 5, h(function(){return 123}) => 123
function h(func) {
    return func();
}

// j([1,2,3]) => 6, j([12,34,56]) => 102
function j(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137
function k(obj) {
    var sum = 0;
    for (var key in obj){
        sum += obj[key];
    }
    return sum;
}

// m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2]
function m(arr1, arr2) {
    var resArr = [];
    for (var i = 0; i < arr1.length; i++){
        resArr[i] = arr1[i] + arr2[i];
    }
    return resArr;
}

// n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2
function n(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}
