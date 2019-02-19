const tax = 0.005;
const maxQuantityOfCards = 3;

function userCard(keyIndex) {
    const cardInfo = {
        key: keyIndex,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []        
    }

    const newOperation = function(operationType, credits) {
        cardInfo.historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: new Date().toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit' 
            })
        })
    }

    const getCardOptions = function() {
        return cardInfo;
    }

    const putCredits = function(credits) {
        cardInfo.balance += credits;
        newOperation('Received credits', credits);
    }

    const takeCredits = function (credits) {
        if (cardInfo.balance >= credits && cardInfo.transactionLimit >= credits) {
            cardInfo.balance -= credits;
            newOperation('Withdrawal of credits', credits);
        } else {
            console.error('Operation rejected, check available balance or increase card\'s limit');
        }
    }

    const setTransactionLimit = function(newLimit) {
        cardInfo.transactionLimit = newLimit;
        newOperation('Transaction limit change', newLimit);
    }

    const transferCredits = function(credits, cardRecipient) { 
        if (cardInfo.balance >= credits + credits * tax && cardInfo.transactionLimit >= credits) {
            cardInfo.balance -= credits + credits * tax;
            cardRecipient.putCredits(credits);
        } else {
        console.error('Operation rejected, check available balance or increase card\'s limit');
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

class UserAccount {
    constructor(name) {
		this.name = name;
        this.cards = [];
    }

	addCard() {
		if (this.cards.length < maxQuantityOfCards) {
            console.log(this.cards.length); 
            this.cards.push(userCard(this.cards.length + 1));
            console.log(this.cards.length);
		} else {
			console.error('You can\'t have more than ' + maxQuantityOfCards + ' cards');
		}
    }

    getCardByKey(index) {
		return this.cards[index - 1];
	}
}