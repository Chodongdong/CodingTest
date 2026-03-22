function solution(signals) {
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const lcmTwo = (a, b) => (a / gcd(a, b)) * b;

      const cycles = signals.map(([g, y, r]) => g + y + r);
      const totalLCM = cycles.reduce(lcmTwo);

      const isYellow = (t, g, y, cycle) => {
          const pos = (t - 1) % cycle;
          return pos >= g && pos < g + y;
      };

      // 노란불 비율이 가장 낮은 신호등 기준으로 탐색 (최적화)
      let pivotIdx = 0;
      for (let i = 1; i < signals.length; i++) {
          if (signals[i][1] / cycles[i] < signals[pivotIdx][1] /
  cycles[pivotIdx]) {
              pivotIdx = i;
          }
      }

      const [g0, y0] = signals[pivotIdx];
      const cycle0 = cycles[pivotIdx];

      for (let k = 0; ; k++) {
          const start = g0 + 1 + k * cycle0;
          if (start > totalLCM) break;
          const end = Math.min(g0 + y0 + k * cycle0, totalLCM);

          for (let t = start; t <= end; t++) {
              if (signals.every(([g, y], i) => isYellow(t, g, y, cycles[i]))) {
                  return t;
              }
          }
      }

      return -1;
  }