function solution(array, height) {
    let arr = array.sort((a,b) => a - b);
    let answer = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > height){
            answer++;
        }
    }
    return answer;
}