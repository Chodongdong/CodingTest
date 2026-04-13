function solution(my_string) {
    return [...my_string]
    .filter((v) => !isNaN(v))
    .map((v) => parseInt(v))
    .sort();
}