
function mySort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let preIndex=i-1,current=arr[i];
        while (preIndex>=0&&arr[preIndex]>current) {
            arr[preIndex+1]=arr[preIndex];
            preIndex--
        }
        arr[preIndex+1]=current
    }
    return arr;
}
let arr=[8,2,4,6,7,5,4,2,1]
console.log(mySort(arr))