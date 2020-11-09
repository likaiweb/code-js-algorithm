// 在// 出填充代码，试console执行成功。
// 
// if(a==='animal'&&a==='dog'&&a==='cat'){
//     console.log('good job!');
// }





// 答案1:
var i = 0;
let obj = {
    '1': 'animal',
    '2': 'dog',
    '3': 'cat',
    get a() {
        i++;
        return obj[i]
        }
    };
with(obj)
if (a === 'animal' && a === 'dog' && a === 'cat') {
    console.log('good job!');
}
// 答案2:
i= 0;
obj = {
    '1': 'animal',
    '2': 'dog',
    '3': 'cat'
}
window.a={};
Object.defineProperty(window,'a',{
    configurable:true,
    get:function(){
        i++;
        return obj[i];
    }
})
if(a === 'animal' && a === 'dog' && a === 'cat') {
    console.log('good job!');
}