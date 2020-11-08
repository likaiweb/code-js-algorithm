
// 添加到新的数组中去，如果重复不加
	var arr=[1,2,3,6,6,6,6,23,2,1,1,3,4,2,1,4,1,4];
	noRepeat(arr);
	function noRepeat(arr){
		var newarr=[];
		for (var i=0;i<arr.length;i++) {
			var flag=true;
			newarr.forEach(function(val,index){
				if(val==arr[i]){
					flag=false;
				}
			})
			if(flag){
				newarr.push(arr[i]);
			}
		}
		console.log(newarr)
	}

// 键值对换位子，重复的自动就会除掉,再换回来
	var arr=[1,2,3,6,6,6,6,23,2,1,1,3,4,2,1,4,1,4];
	noRepeat(arr);
	function noRepeat(arr){
		var obj={};
		for(var i in arr){
			obj[arr[i]]="a";
		}
		var newarr=[];
		for(var j in obj){
			newarr.push(j)
		}
		console.log(newarr)
	}