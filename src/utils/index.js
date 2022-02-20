/*
* 2022-02-18 17：11
* jikang
*
* */
// 浅拷贝
export function shallowClone(oldObj) {
    const newObj = {}
    for (let item in oldObj) {
        if(oldObj.hasOwnProperty(item)) {
            newObj[item] = oldObj[item]
        }
    }
    return newObj
}
// 深拷贝
export function deepClone(oldObj) {
    if([undefined,null].includes() ) {
        console.log('深拷贝', oldObj)
    }
}