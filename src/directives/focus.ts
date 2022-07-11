const focus = {
    mounted: (el: HTMLElement) => el.focus()
}

export function bindingFocus(app: any) {
    app.directive('focus', focus)
}
