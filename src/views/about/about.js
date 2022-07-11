class About {
    static {
        console.log('init about', this)
    }
}

let aa = 'aa'
let aA = 'AA'

console.log('aa ', aa)
console.log('aA ', aA)

About.prototype.name = 'Tom'
const about = new About()
console.log('about ', about.name)
function agrFunc(a, b, c) {
    console.log('arguments ', arguments.length)
}

agrFunc('12345', 'b')

function Student() {
    console.log('init student func class', this)
    this.sayHi = function () {
        console.log(`My name is ${this.name}`)
    }
}
Student.prototype.name = 'David'
const student = new Student()
student.sayHi()

console.log('student object ', student)

// eslint-disable-next-line no-extend-native
Array.prototype.remove = function (val) {
    const index = this.findIndex(
        (i) => JSON.stringify(i) === JSON.stringify(val)
    )
    if (index === -1) {
        return false
    }
    this.splice(index, 1)
    return true
}

let strArr = ['a', 'b', 'c']
let numArr = [1, 2, 3, 4]
let objArr = [
    {
        name: 'aaa',
        gender: 1,
        age: 18,
        id: '235343432423434'
    },
    {
        name: 'bbb',
        gender: 0,
        age: 22,
        id: '44444444444444444'
    },
    {
        name: 'ccc',
        gender: 1,
        age: 21,
        id: '53532435453454354'
    }
]
strArr.remove('b')
console.log('strArr ', strArr)
numArr.remove(2)
console.log('numArr ', numArr)
objArr.remove(objArr[1])

console.log('objArr ', objArr)
