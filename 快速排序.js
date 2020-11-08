
function mySort(arr) {
    if(arr.length<=1){return arr}
    let mid=arr[arr.length-1];
    let left=arr.filter((v,i)=>v<=mid&&i!=arr.length-1)
    let right=arr.filter(_=>_>mid)
    return [...mySort(left),mid,...mySort(right)]
}
let arr=[8,2,4,6,7,5,4,2,1]
console.log(mySort(arr))