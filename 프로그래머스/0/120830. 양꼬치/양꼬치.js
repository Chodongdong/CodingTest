function solution(n, k) {
    let answer = 0;
    answer = 12000*n + 2000*k -(Math.floor(n/10)*2000)
    return answer;
}