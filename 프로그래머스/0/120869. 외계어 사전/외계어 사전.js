function solution(spell, dic) {
    let answer = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((item) => {
            if(word.includes(item)){
                count += 1;
            }
        })
        
        if(count === spell.length){
            answer.push(word);
        }
    })
    
    return answer.length === 0 ? 2 : 1;
}