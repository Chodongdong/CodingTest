function solution(keyinput, board) {
    var answer = [0,0];
    const maxX = (board[0] -1)/2
    const maxY = (board[1] -1)/2
    for(let i=0;i<keyinput.length;i++){
        if(keyinput[i] === "up" && answer[1] < maxY){
            answer[1] += 1;
        }else if(keyinput[i] === "down" && answer[1] > -maxY){
            answer[1] -= 1;
        }else if(keyinput[i] === "left" && answer[0] > -maxX){
            answer[0] -= 1;
        }else if(keyinput[i] === "right" && answer[0] < maxX){
            answer[0] += 1;
        }
    }
    return answer;
}