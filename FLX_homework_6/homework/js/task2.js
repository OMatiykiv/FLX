function isNumeric (n1, n2) {
    return !isNaN (parseFloat (n1)) && isFinite (n1) && (parseFloat (n2)) && isFinite (n2);    
} 
var price = +prompt("enter price", "");
var discount = +prompt("enter discount in interest", "");
var saved = +(price * discount / 100).toFixed(2);
var priceWithDiscount = (price - saved);
if ( isNumeric (price, discount) === false || 
    0 > price || price > 9999999 || 
    0 > discount || discount > 99 ) {
    alert ("Invalid input data")
} else {
    alert ("Price without discount: " + price + 
    "\nDiscount: " + discount + "%" +
    "\nPrice with discount: " + priceWithDiscount + 
    "\nSaved: " + saved);
}
