function solution(my_string) {
    let num = my_string.split('')
    let answer = 0;
    for(let i=0;i<num.length;i++){
        if(Number(num[i])) answer += Number(num[i])
    }
    return answer;
}