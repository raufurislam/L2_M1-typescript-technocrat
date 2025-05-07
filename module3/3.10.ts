{
  // Encapsulation in oop
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }
    getHiddenMthod() {
      return this.getBalance();
    }
  }

  const goribManusherAccount = new BankAccount(111, "Raufur", 50);
  goribManusherAccount.addDeposit(60);
  const myBalance = goribManusherAccount.getHiddenMthod();

  console.log(goribManusherAccount);
  console.log({ myBalance });
  //
}
