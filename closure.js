function createBankAccount(initial) {
    let balance = initial;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            return balance;
        },

        balance() {
            return balance;
        }
    };
}

const account = createBankAccount(10000);

console.log(account.balance());      
console.log(account.deposit(5000)); 
console.log(account.withdraw(3000)); 
console.log(account.withdraw(15000));
console.log(account.balance());      