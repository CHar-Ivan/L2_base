function isCircleSorted( arr ){
    let temp=0
    for(let i=0;i<arr.length;i++){
        let n=arr[(i+1)%arr.length]
        if(arr[i]>n){
            temp++
        }
    }
    if(temp<=1){
        return true
    }
    else{return false}
}