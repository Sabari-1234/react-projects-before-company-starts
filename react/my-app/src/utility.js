const isArrayEmpty=(arr)=>{
    if(arr!==null&&arr!==undefined &&arr.length>0)
    {
        return false
    }
    return true
}
const print=(mes)=>{
    console.log(mes)
}
export {isArrayEmpty,print}