function solution(price, money, count) {
    let use = 0
    for(let i=0; i<= count; i++){
        let N = price * i;
        use += N
    }
    let left = money - use;
    if(left >= 0){
        return 0;
    }else {
        return Math.abs(left);
    }
}