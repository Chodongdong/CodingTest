function solution(numbers) {
    let arr = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    
    const set = new Set(arr);
    const newArr = [...set];
    
    return newArr.sort((a, b) => a - b);
}