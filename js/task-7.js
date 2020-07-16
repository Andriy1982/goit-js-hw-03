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
      if (this.transactions[i].id === id) {
        return console.log(this.transactions[i]);
      }
    }
    return console.log("Ви ввели некоректні дані!");
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        total += +this.transactions[i].amount;
      }
    }
    return total;
  },

  getTransactionId() {
    let arrId = [];
    for (let i = 0; i < this.transactions.length; i += 1) {
      arrId.push(this.transactions[i].id);
    }
    return arrId.toString();
  },
};

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
  let transactionNumberId = prompt(
    `Виберіть номер транзакції з списку: ${account.getTransactionId()}`
  );
  if (transactionNumberId !== null) {
    return account.getTransactionDetails(+transactionNumberId);
  }
});

buttonTransactionType.addEventListener("click", () => {
  let transactionOnType = prompt(
    "Виберіть тип транзакції: deposit чи withdraw"
  );
  if (transactionOnType === "deposit" || transactionOnType === "withdraw") {
    return console.log(account.getTransactionTotal(transactionOnType));
  }
  return console.log("Ви ввели некоректні дані!");
});
