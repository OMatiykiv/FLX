function formatTime(a) {
    var m = a % 60;
    var h = ((a-m)/60) % 24;
    var d = ((a-m)/60-h) / 24;   
    return ( d + " day(s) " + h + " hour(s) " + m + " minute(s)")
}
formatTime(120);
formatTime(59);
formatTime(1441);