function solution(numlist, n) {
  return numlist.sort((a, b) => {
    // 1. n과의 거리차 계산
    const diffA = Math.abs(n - a);
    const diffB = Math.abs(n - b);

    if (diffA !== diffB) {
      return diffA - diffB;
    }
    return b - a;
  });
}
