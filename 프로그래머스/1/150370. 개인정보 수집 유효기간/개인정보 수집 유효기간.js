  function solution(today, terms, privacies) {
      const answer = [];

      const todays = (dateStr) => {
          const [y, m, d] = dateStr.split(".").map(Number);
          return y * 12 * 28 + m * 28 + d;
      };

      const termMap = {};
      for (const term of terms) {
          const [type, months] = term.split(" ");
          termMap[type] = Number(months);
      }

      const todayDays = todays(today);

      privacies.forEach((privacy, idx) => {
          const [dateStr, type] = privacy.split(" ");
          const collectedDays = todays(dateStr);
          const expiryDays = collectedDays + termMap[type] * 28;

          if (expiryDays <= todayDays) {
              answer.push(idx + 1);
          }
      });

      return answer;
  }