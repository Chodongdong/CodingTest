function solution(n) {
    let div = 1;
    var answer = [];
    for(let i=1;i<=n;i++){
        if(n%i === 0){
            answer.push(i)
        }
    }
    return answer;
}