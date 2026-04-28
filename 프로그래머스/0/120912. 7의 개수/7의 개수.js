function solution(array) {
    let answer = 0;
    let digits = String(array).split('');
    digits.forEach((e) => {
        if(e === "7"){
            answer++;
        }
    })
    return answer;
}