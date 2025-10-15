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
console.log(century("1999")); // "20th"
console.log(century("2011")); // "21st"
console.log(century("2154")); // "22nd"
console.log(century("2259")); // "23rd"
console.log(century("1124")); // "12th"
console.log(century("2000")); // "20th"