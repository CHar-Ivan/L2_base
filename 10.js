function bingo(ticket, win){
    let count=0
    for(let i=0;i<ticket.length;i++){
        let word =ticket[i][0]
        let num=ticket[i][1]
        for(let j=0;j<word.length;j++){
            if(word.charCodeAt(j)===num){
                count=count+1
                break
            }
        }
    }
    if(count>=win){
        return"Winner!"}
    else{
        return"Loser!"
    }
}
