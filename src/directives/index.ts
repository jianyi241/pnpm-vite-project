import { bindingFocus } from "./focus";
import {bindingColor} from "./color";
import {bindingClock} from "./clock";

export function binding(app: any) {
    bindingFocus(app);
    bindingColor(app);
    bindingClock(app);
}