function solution(str){
    let result = [];
    for (let i = 0; i < str.length; i+=2){
        let f=str[i]
        let s=str[i+1]||'_'
        result.push(f+s)
    }
    return result
}
let str='abcde'
console.log(solution(str))