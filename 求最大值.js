
// 使用apply特性求最大值
var arr=[2,3,13,4,42,51,5,2];
console.log(Math.max.apply(null,arr))
// 普通方法
var arr=[2,3,13,4,42,51,5,2];
var n=arr[0];
for (var i = 0; i < arr.length; i++) {
	if(arr[i]>n){
		n=arr[i];
	}
};
console.log(n);