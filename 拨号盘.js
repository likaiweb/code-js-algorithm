// 给定数字集合，输出所有组合字母
// 输入’23’
// 输出 [‘ad’,’ae’,’af’,’bd’...]
function findIndex(str) {
    if (str.indexOf('1' || '0') != -1) {
        return ''
    }
    let arr = str.split('');
    let obj={
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }
    let list=[]
    for (const i of arr) {
        if (!list.length) {
            list = obj[i]
            continue
        }
        let list2 = []
        for (const j of list) {
            for (const n of obj[i]) {
                list2.push(j+n)
            }
        }
        list=list2
    }
    return list;
}
console.log(findIndex('23'))