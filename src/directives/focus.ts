const focus = {
    mounted: (el: HTMLElement) => el.focus()
}

export function bindingFocus(app: any) {
    console.log('app ', app)
    app.directive('focus', focus)
}
