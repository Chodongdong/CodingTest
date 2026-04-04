function solution(lottos, win_nums) {
  let zero = 0; 
  let correct = 0; 

  lottos.forEach((item) => {
    if (item == 0) zero++;
    else if (win_nums.includes(item)) correct++;
  });
    
  let min = 7 - correct >= 6 ? 6 : 7 - correct;
  let max = min - zero < 1 ? 1 : min - zero;

  return [max, min];
}