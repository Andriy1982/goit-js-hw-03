const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  getTransactions() {
    // console.log(Object.values(this.transactions));
    return this.transactions;
  },
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = this.transactions.length + 1;
    const historiTranzactions = { id, amount, type };

    // console.log(this.transactions);
    this.transactions.push(historiTranzactions);
    return historiTranzactions;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.createTransaction(+amount, Transaction.DEPOSIT);
    // console.log(`Yoy add ${amount} credits`);
    // return console.log("hello");
    this.balance += +amount;
    console.log(
      `Ви додали ${amount} кредитів, Ваш новий баланс ${this.balance} кредитів`
    );
    return this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    // if (+amount > this.balance) {
    //   console.log(
    //     `Not enough credits on your account, Your balance "${this.balance}" credits`
    //   );
    //   return this.balance;
    // }
    this.createTransaction(+amount, Transaction.WITHDRAW);
    this.balance -= +amount;
    console.log(
      `Ви зняли ${amount} кредитів, Ваш новий баланс ${this.balance} кредитів`
    );
    return this.balance;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      // console.log(this.transactions[i]);
      if (this.transactions[i].id === id) {
        // return this.transactions[i];
        console.log(this.transactions[i]);
      }
    }
    // console.log(transaction);
    // if (id === transaction[0].id) {
    //   console.log(transactions);
    // }
    // console.log(this.transactions);
    // return this.transactions.filter(this.transactions.historiTranzactions.id);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      // console.log(this.transactions[i].amount);
      if (this.transactions[i].type === type) {
        total += +this.transactions[i].amount;
        // console.log(this.transactions[i].amount);
        // console.log(total);
      }
      // console.log(total);
    }
    return total;
  },
};

// console.log(historiTranzactions);

// console.log(account.getBalance());

// console.log(account.createTransaction(100, "deposit"));

// console.log(account.createTransaction(700, "deposit"));

// console.table(account.getTransactions());

// console.log(account.createTransaction(300, "withdraw"));

// // console.table(account.getTransactions());

// console.log(account.createTransaction(500, "deposit"));
// // console.log(account.createTransaction(100, "deposit"));

// console.log(account.getTransactionTotal("deposit"));
const buttonBalanceteRef = document.getElementById("balance");
const buttonDepositeRef = document.getElementById("deposite");
const buttonWithdrawRef = document.getElementById("withdraw");
const buttonTransactionIdteRef = document.getElementById("transaction-id");
const buttonTransactionType = document.getElementById("transaction-type");

buttonBalanceteRef.addEventListener("click", () => {
  console.log(`Ваш баланс ${account.getBalance()} кредитів`);
});

buttonDepositeRef.addEventListener("click", () => {
  let putDeposit = prompt("Введіть суму коштів яку хочите покласти на депозит");
  if (putDeposit === null) {
    return console.log("Відмінено користувачем!");
  }
  if (Number.isNaN(+putDeposit) || +putDeposit <= 0) {
    return console.log("Ви ввели некоректні дані");
  }
  return account.deposit(putDeposit);
});

buttonWithdrawRef.addEventListener("click", () => {
  let getWithdraw = prompt("Введіть суму коштів яку хочите зняти");

  if (getWithdraw === null) {
    return console.log("Відмінено користувачем!");
  }
  if (Number.isNaN(+getWithdraw) || +getWithdraw <= 0) {
    return console.log("Ви ввели некоректні дані");
  }
  if (+getWithdraw > account.balance) {
    return console.log(
      `На Вашому балансі недостатньо кредитів, Ваш баланс ${account.balance} кредитів!`
    );
  }
  return account.withdraw(getWithdraw);
});

buttonTransactionIdteRef.addEventListener("click", () => {
  let transactionOnId = prompt("Введіть номер транзакції");
  if (transactionOnId !== null) {
    return account.getTransactionDetails(+transactionOnId);
  }
});

// console.table(account.getTransactions());
// account.deposit(399);
// account.deposit(500);
// console.log(account.balance);
// console.table(account.getTransactions());
// console.log(account.createTransaction(100, "deposit"));
