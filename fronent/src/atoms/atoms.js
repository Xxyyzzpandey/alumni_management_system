import {atom,selector} from "recoil"

export const user=atom({
    key:"user",
    default:""
})

export const isLogedin=atom({
    key:"isLogedin",
    default:false
})

