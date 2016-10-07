namespace type_exercise {

type bankAccountType = { money: number, deposite: (value: number) => void }

let bankAccount: bankAccountType = {
    money: 2000,
    deposite(value: number): void {
        this.money += value
    }
}

type mySelfType = { name: string, bankAccount: bankAccountType, hobbies: string[] }

let mySelf: mySelfType = {
    name: 'Krish',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
}

mySelf.bankAccount.deposite(5000)
console.log(mySelf)

}