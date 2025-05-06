{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // public addDeposite(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getter
    get balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }
  const goribManusherAccount = new BankAccount(111, "gorib manush", 50);
  goribManusherAccount.deposit = 50;
  const myBalance = goribManusherAccount.balance;
  console.log({ myBalance });
  console.log(goribManusherAccount);
  //
}
