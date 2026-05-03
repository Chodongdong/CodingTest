function solution(num, total) {
    var answer = [];
    let first = Math.ceil(total / num) - Math.floor(num / 2)
    for(let i=first;i<first+num;i++){
        answer.push(i)
    }
    return answer;
}