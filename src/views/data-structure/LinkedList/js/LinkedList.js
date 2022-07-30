// eslint-disable-next-line max-classes-per-file
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    append(element) {
        let node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.getNode(this.size - 1)
            current.next = node
        }
        this.size++
    }

    appendAt(element, index) {
        if (index < 0 || index > this.size) {
            return new Error('index out error')
        }

        let node = new Node(element)
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let prev = this.getNode(index - 1)
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return new Error('index out error')
        }
        if (index === 0) {
            this.head = this.getNode(index + 1)
        } else {
            let prev = this.getNode(index - 1)
            prev.next = prev.next.next
        }
        this.size--
    }

    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            if (current.element === element) {
                return i
            }
            current = current.next
        }
    }

    getNode(index) {
        if (index < 0 || index >= this.size) {
            return new Error('index out error')
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    forEach(callback) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            callback(current.element, i)
            current = current.next
        }
    }
}

const linkedList = new LinkedList()
linkedList.append('1')
linkedList.append('2')
linkedList.append('3')
linkedList.append('4')
linkedList.appendAt('99', 0)
linkedList.appendAt('55', 5)
linkedList.appendAt('33', 2)
linkedList.removeAt(0)
linkedList.removeAt(1)
const indexOf2 = linkedList.indexOf('3')
console.dir(linkedList, {
    depth: 100
})

console.log('index of ', indexOf2)

linkedList.forEach((i, idx) => {
    console.log(idx, ' --- i -- ', i)
})

const obj = {
    chrome: 'chrome',
    edge: 'edge',
    firefox: 'firefox'
}
//
// for (const objKey in obj) {
//     if (objKey === 'chrome') {
//         delete obj[objKey]
//     }
// }
delete obj.chrome
console.log('obj ', obj)

let mapArr = [1, 2, 3]
function iteratorParse(...val) {
    console.log('val', JSON.stringify(val))
    return parseInt(val[0])
}
mapArr = mapArr.map(iteratorParse)
console.log('newMapArr ', mapArr)
console.log('forEach')
mapArr.forEach(iteratorParse)
console.log('filter')
mapArr.filter(iteratorParse)

function getImageDataURL(image) {
    // 创建画布
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext('2d')
    // 以图片为背景剪裁画布
    ctx.drawImage(image, 0, 0, image.width, image.height)
    // 获取图片后缀名
    const extension = image.src
        .substring(image.src.lastIndexOf('.') + 1)
        .toLowerCase()
    // 某些图片 url 可能没有后缀名，默认是 png
    return canvas.toDataURL('image/' + extension, 1)
}

function downLoad(downloadName, url) {
    const tag = document.createElement('a')
    // 此属性的值就是下载时图片的名称，注意，名称中不能有半角点，否则下载时后缀名会错误
    tag.setAttribute('download', downloadName.replace(/\./g, '。'))

    const image = new Image()
    // 设置 image 的 url, 添加时间戳，防止浏览器缓存图片
    image.src = url + '?time=' + new Date().getTime()
    //重要，设置 crossOrigin 属性，否则图片跨域会报错
    image.setAttribute('crossOrigin', 'Anonymous')
    // 图片未加载完成时操作会报错
    image.onload = () => {
        tag.href = getImageDataURL(image)
        tag.click()
    }
}
