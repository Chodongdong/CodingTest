function solution(babbling) {
    let count = 0;
    const canSpeak = ["aya", "ye", "woo", "ma"];
    
    for (let word of babbling) {
        let tempWord = word;
        for (let speak of canSpeak) {
            if (tempWord.includes(speak)) {
                tempWord = tempWord.replaceAll(speak, " ");
            }
        }
        if (tempWord.trim() === "") {
            count++;
        }
    }
    return count;
}
