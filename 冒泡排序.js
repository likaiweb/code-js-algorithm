
function mySort(arr) {
    for (let i = arr.length-1; i >0; i--) {
        for (let j = 0; j < i; j++) {
            if(arr[j]>arr[j+1])
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
    return arr;
}
let arr=[8,2,4,6,7,5,4,2,1]
console.log(mySort(arr))