function solution(board, moves) {
    var answer = 0;
    var arr = [];
    
    for( var i=0; i<moves.length; i++){
        var idx = moves[i] - 1
        for( var j=0; j<board.length; j++){
            if( board[j][idx] !== 0 ){
                if( arr[arr.length-1] == board[j][idx] ){
                    arr.pop();
                    answer+=2;
                }else{
                    arr.push( board[j][idx]);     
                }
                board[j][idx] = 0;
                break;
            }
        }
    }
    
    return answer;
}