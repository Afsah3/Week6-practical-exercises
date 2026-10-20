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

// Example
const account = createBankAccount(5000);

console.log(account.balance());      
console.log(account.deposit(2000));  
console.log(account.withdraw(1000)); 
console.log(account.withdraw(12000));
console.log(account.balance());      