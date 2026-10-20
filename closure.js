function createBankAccount(initial) {
    let accountBalance = initial;

    return {
        deposit(amount) {
            if (amount > 0) {
                accountBalance += amount;
                console.log("Deposited:", amount);
            } else {
                console.log("Invalid deposit amount.");
            }
        },

        withdraw(amount) {
            if (amount > accountBalance) {
                console.log("Insufficient funds.");
            } else if (amount > 0) {
                accountBalance -= amount;
                console.log("Withdrawn:", amount);
            } else {
                console.log("Invalid withdrawal amount.");
            }
        },

        balance() {
            return accountBalance;
        }
    };
}

const account = createBankAccount(10000);
account.deposit(5000);
account.withdraw(3000);
console.log("Current Balance:", account.balance());
account.withdraw(20000);
console.log("Final Balance:", account.balance());
