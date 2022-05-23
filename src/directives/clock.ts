import {DirectiveBinding} from "vue";
import moment from "moment/moment";

const clock = {
    mounted: (el: HTMLElement, bind: DirectiveBinding) => {
        moment.locale()
        setInterval(() => {
            el.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
        })
    }
}

export function bindingClock(app: any){
    console.log('app ', app)
    app.directive('clock', clock)
}