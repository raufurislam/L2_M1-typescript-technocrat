{
  // access modifier
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    // private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  //   instance
  const goribManusherAccount = new BankAccount(111, "gorib manush", 50);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(50 + 10);

  const myBalance = goribManusherAccount.getBalance();

  console.log(goribManusherAccount);
  console.log({ myBalance });
  //
}
