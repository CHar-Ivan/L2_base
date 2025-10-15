function hasTwoCubeSums(n) {
    let s = 0;
    for (let a=1;a*a*a<n;a++) {
        let a3=a**3
        let b3=n-a3
        let b=Math.round(Math.cbrt(b3))
        if(b>a&&b**3===b3){
            s++
            if(s===2){
                return true
            }}
    }
    return false
}
let n=1729
console.log(hasTwoCubeSums(n))