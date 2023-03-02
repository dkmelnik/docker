import {bootstrap} from "./core/server/server";

try {
    bootstrap()
    console.log('success')
}catch (e) {
    console.error(e)
}