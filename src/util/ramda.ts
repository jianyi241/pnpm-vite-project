import * as R from 'ramda'

interface User {
    isVip: boolean
    balance: number
    userName: string
}

const users: User[] = [
    {
        isVip: false,
        balance: 10,
        userName: 'David'
    },
    {
        isVip: true,
        balance: 90,
        userName: 'Tom'
    },
    {
        isVip: false,
        balance: 15,
        userName: 'Jamis'
    },
    {
        isVip: true,
        balance: 12,
        userName: 'Qiaos'
    },
    {
        isVip: false,
        balance: 1,
        userName: 'Lingw'
    }
]

// 其中有深拷贝操作
const addVipBalance = R.ifElse(
    R.propEq('isVip', true),
    R.evolve({
        balance: R.add(10)
    }),
    R.identity
)

const newUsers: User[] = users.map(addVipBalance)
console.log('old users ', users)
console.log('new users ', newUsers)

const users1: User[] = JSON.parse(JSON.stringify(users))
const newUsers1: User[] = users1.map((m) => {
    // 深拷贝，否则会连同users1一起被修改
    const obj = JSON.parse(JSON.stringify(m))
    if (obj.isVip) {
        obj.balance += 10
    }
    return obj
})

console.log('old users1 ', users1)
console.log('new users1 ', newUsers1)
