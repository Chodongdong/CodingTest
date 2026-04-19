function solution(numbers) {
    const str = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    str.forEach((item, index) => {
        numbers = numbers.split(item).join(String(index));
    })
    return Number(numbers);
}