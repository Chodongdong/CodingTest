function solution(n) {
    let answer = 0;
    let fir = n.toString(3);
    let sec = fir.split('').reverse().join('');
    answer = parseInt(sec, 3)
    return answer;
}