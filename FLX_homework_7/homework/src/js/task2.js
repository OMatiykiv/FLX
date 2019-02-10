var start = confirm("Do you want to play a game?");
if (start === false) {
    alert ("You did not become a millionaire, but can.")
} else {
    var again = true;
    while (again === true) {
        var totalPrize = 0;
        var prize = 0;
        var round = 0;
        var cont = true;
        while (cont === true) {
            round++;
            var max = 5 * Math.pow(2,(round-1));
            var firstAttemptPrize = 10 * Math.pow(3,(round - 1));
            var secondAttemptPrize = Math.floor(firstAttemptPrize / 2);
            var thirdAttemptPrize = Math.floor(secondAttemptPrize / 2);
            var x = Math.round( Math.random() * (max + 1) - 0.5 );
            if (x === (max+1)) {
                x = max;
            }
            for (var i=3; i>0; i--){
                if (i===3) {
                    prize = firstAttemptPrize;
                } else if (i===2) {
                    prize = secondAttemptPrize;
                } else if (i===1) {
                    prize = thirdAttemptPrize;
                } 
                var number = +prompt("Enter a number from 0 to " + max +
                "\nAttempts left: " + i +
                "\nTotal Prize: " + totalPrize + 
                "\nPossible prize on current attempt: " + prize, "");
                if (i===1 && number !== x) {
                    cont = false;
                }
                if (number === x){
                    totalPrize += prize;
                    i = 0;
                } 
            }
            if (number === x){
                cont = confirm("Congratulation! Your prize is: " + totalPrize +
                "\nDo you want to continue?");
            }     
        }
        alert ("Thank you for a game. Your prize is: " + totalPrize);
        again = confirm("Do you want to play again?");
    }
} 


