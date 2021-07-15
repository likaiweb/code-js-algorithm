// 实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
// • 要求最大并发数 maxNum
// • 每当有一个请求返回，就留下一个空位，可以增加新的请求
// • 所有请求完成后，结果按照 urls 里面的顺序依次打出


// 请求接口数组
const urls:string[]=[
    'https://request/1',
    'https://request/2',
    'https://request/3',
    'https://request/4',
    'https://request/5',
]
// 节流函数
const multiRequest=(urls:string[],maxNum:number)=>{
    const len=urls.length;
    const result:any[]=urls.map(v=>false);
    let count=0;
    return new Promise((resolve,reject)=>{
        // 递归函数
        const next=()=>{
            let current=count++;
            if(current>=len){
                !result.includes(false)&&resolve(result)
            }
            const url=urls[current]
            fetch(url).then(res=>{
                result[current]=res
                if(current<len){
                    next()
                }
            }).catch(err=>{
                result[current]=console.error();
                if(current<len){
                    next()
                }
            })
        }
        while(count<maxNum){
            next()
        }
    })
}
multiRequest(urls,2)