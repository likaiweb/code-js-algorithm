
function mySort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let min=i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[min]>arr[j])
                min=j
        }
        [arr[min],arr[i]]=[arr[i],arr[min]]
    }
    return arr;
}
let arr=[8,2,4,6,7,5,4,2,1]
console.log(mySort(arr))