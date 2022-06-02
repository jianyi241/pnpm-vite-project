import { DirectiveBinding } from 'vue'

const color = {
    mounted: (el: HTMLElement, bind: DirectiveBinding) => {
        el.style.color = bind.value
    }
}

export function bindingColor(app: any) {
    console.log('app ', app)
    app.directive('color', color)
}
