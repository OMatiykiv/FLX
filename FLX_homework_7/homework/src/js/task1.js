var currentHours = new Date().getHours()
if (currentHours < 20 ) {
    var partOfTheDay = "day";
} else {
    partOfTheDay = "evening";
}
var passwordList = {
    "User": "UserPass",
    "Admin": "RootPass"
}
var login = prompt ('Insert user login', "");
if (login === null || login === "") {
    alert ("Canceled")
} else if (login.length < 4) {
    alert ("I don't know any users having name length less than 4 symbols");
} else if (login === "Admin" || login === "User") {
    var password = prompt("enter password", "");
    if (password === null || password === "") {
        alert ("Canceled")
    } else if (password === passwordList[login] ) {
        alert ("Good " + partOfTheDay +", dear " + login);
    } else {
        alert ("Wrong password");
    }
} else {
    alert ("I don’t know you");
}