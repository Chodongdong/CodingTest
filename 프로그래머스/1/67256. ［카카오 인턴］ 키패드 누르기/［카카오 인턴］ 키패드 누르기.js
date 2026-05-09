function solution(numbers, hand) {
    let answer = '';
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    let leftPos = keypad['*'];
    let rightPos = keypad['#'];

    for (let num of numbers) {
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            leftPos = keypad[num];
        } else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            rightPos = keypad[num];
        } else {
            let targetPos = keypad[num];
            let leftDist = Math.abs(leftPos[0] - targetPos[0]) + Math.abs(leftPos[1] - targetPos[1]);
            let rightDist = Math.abs(rightPos[0] - targetPos[0]) + Math.abs(rightPos[1] - targetPos[1]);

            if (leftDist < rightDist) {
                answer += 'L';
                leftPos = targetPos;
            } else if (rightDist < leftDist) {
                answer += 'R';
                rightPos = targetPos;
            } else {
                if (hand === 'left') {
                    answer += 'L';
                    leftPos = targetPos;
                } else {
                    answer += 'R';
                    rightPos = targetPos;
                }
            }
        }
    }
    return answer;
}
