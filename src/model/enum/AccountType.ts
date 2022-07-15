export class AccountType {
    private static allValues: AccountType[] = []

    public static readonly email = new AccountType('Email', 'Email')
    public static readonly mobile = new AccountType('Mobile', 'Mobile')

    constructor(public name: string, public value: string) {
        AccountType.allValues.push(this)
    }

    static values(): Array<AccountType> {
        return AccountType.allValues
    }
}
