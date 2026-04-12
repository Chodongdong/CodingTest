function solution(n) {
    let answer = 0;
    let fac = 1;
    for(let i=1; i<=n;i++){
        fac *= i
        if(fac <= n) answer = i;
    }
    return answer;
}