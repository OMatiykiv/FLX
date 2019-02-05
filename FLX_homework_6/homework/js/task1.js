function isNumeric (n1, n2, n3) {
    return !isNaN (parseFloat (n1)) && isFinite (n1) && (parseFloat (n2)) 
    && isFinite (n2) && (parseFloat (n3)) && isFinite (n3);    
} 
var a = +prompt("enter \"a\" in equation ax^2 + bx + c = 0", "");
var b = +prompt("enter \"b\" in equation ax^2 + bx + c = 0", "");
var c = +prompt("enter \"c\" in equation ax^2 + bx + c = 0", "");
var d = b * b - 4 * a * c;
var x1 = (- b + Math.sqrt(d)) / (2 * a);
var x2 = (- b - Math.sqrt(d)) / (2 * a);
if (isNumeric (a, b, c) === false) {
    alert ("Invalid input data")
} else if (a === 0) {
    x1 = - c / b;
    alert ("x =" +x1);
} else if (d < 0) {
    alert ("no solution")
} else if (d === 0) {
    alert ("x =" +x1)
} else if (d > 0) {
    alert ("x1 =" +x1) 
    alert ("x2 =" +x2)
}