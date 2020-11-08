
// 乘法口诀+金字塔
for(var i=1;i<10;i++){
	for(var k=9;k>=i;k--){
		document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	};
	for(var j=1;j<=i;j++){
		document.write(j+"*"+i+"="+(i*j)+"&nbsp;&nbsp;&nbsp;");
		if((j==2&&i==3)||(j==2&&i==4)){
			document.write("&nbsp;&nbsp;");
		}
	};
	document.write("<br/>");
};


// 乘法口诀倒序排列
for(var i=9;i>=1;i--){
	for(var j=1;j<=i;j++){
		document.write(j+"*"+i+"="+(i*j)+"&nbsp;&nbsp;&nbsp;");
	};
	document.write("<br/>");
};


// 乘法口诀倒序+金字塔
for(var i=9;i>=1;i--){
	for(var j=1;j<=i;j++){
		document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	};
	for(var k=9;k>=i;k--){
		document.write(k+"*"+i+"="+(i*k)+"&nbsp;&nbsp;&nbsp;&nbsp;");
		if((i*j)<10)
			document.write("&nbsp;");
		if(i==1)
			document.write("&nbsp;");
	}
	document.write("<br/>");
};