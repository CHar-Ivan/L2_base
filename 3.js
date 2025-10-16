function whatCentury(year)
{let temp
    let y=year
    let cent =Math.ceil(year/100)
    let th='th'
    if(cent%100<11||cent%100>13){
        if(cent%10===1)th='st'
        else if(cent%10===2)th='nd'
        else if(cent%10===3)th='rd'
    }
    return cent+th}
