
String.prototype.fan=function(){
	var arr=str.split("");
	console.log(arr);
	var newarr=[];
	arr.forEach(function(val,index){
		newarr.unshift(val);
	})
	return newarr.join("");
}
var str="abcde";
str.fan()