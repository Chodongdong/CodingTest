function solution(num, k) {
    let arr = num.toString().split('').map(str => parseInt(str));
    if (arr.indexOf(k) !== -1){
        return arr.indexOf(k)+1;
    }else{
        return -1;
    }
}