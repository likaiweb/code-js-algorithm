
/**
 * @description 求某个数以内质数的和
 * @param {*} num 
 */


function sum(num) {
    const a = [2];
    for (let i = 3; i <= num; i += 2) {
        if (a.every(_ => i % _)) {
            a.push(i)
        }
    }
    return a.reduce((p, n) => p + n);
}
console.log(sum(1000))