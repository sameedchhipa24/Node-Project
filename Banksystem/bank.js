import inquirer from 'inquirer';
// Define a simple account class
class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
// Create an object to manage bank accounts
const bankAccounts = {};
function createAccount() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'accountNumber',
            message: 'Enter your account number:',
        },
    ])
        .then((answers) => {
        const accountNumber = answers.accountNumber;
        if (!bankAccounts[accountNumber]) {
            bankAccounts[accountNumber] = new BankAccount(accountNumber);
            console.log('Account created successfully.');
        }
        else {
            console.log('Account with this number already exists.');
        }
        mainMenu();
    });
}
function performTransaction(accountNumber) {
    const choices = ['Deposit', 'Withdraw', 'Check Balance', 'Back'];
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: choices,
        },
    ]).then((answers) => {
        switch (answers.action) {
            case 'Deposit':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'amount',
                        message: 'Enter the deposit amount:',
                        validate: (value) => !isNaN(value) && parseFloat(value) > 0,
                    },
                ]).then((depositAnswer) => {
                    const amount = parseFloat(depositAnswer.amount);
                    bankAccounts[accountNumber].deposit(amount);
                    console.log(`Deposited Rs${amount}`);
                    performTransaction(accountNumber);
                });
                break;
            case 'Withdraw':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'amount',
                        message: 'Enter the withdrawal amount:',
                        validate: (value) => !isNaN(value) && parseFloat(value) > 0,
                    },
                ]).then((withdrawAnswer) => {
                    const amount = parseFloat(withdrawAnswer.amount);
                    bankAccounts[accountNumber].withdraw(amount);
                    performTransaction(accountNumber);
                });
                break;
            case 'Check Balance':
                console.log(`Balance: Rs${bankAccounts[accountNumber].getBalance()}`);
                performTransaction(accountNumber);
                break;
            case 'Back':
                mainMenu();
                break;
        }
    });
}
function mainMenu() {
    const choices = ['Create Account', 'Perform Transaction', 'Exit'];
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: choices,
        },
    ]).then((answers) => {
        switch (answers.action) {
            case 'Create Account':
                createAccount();
                break;
            case 'Perform Transaction':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'accountNumber',
                        message: 'Enter your account number:',
                    },
                ])
                    .then((accountNumberAnswer) => {
                    const accountNumber = accountNumberAnswer.accountNumber;
                    if (bankAccounts[accountNumber]) {
                        performTransaction(accountNumber);
                    }
                    else {
                        console.log('Account does not exist.');
                        mainMenu();
                    }
                });
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit(0);
                break;
        }
    });
}
mainMenu();
