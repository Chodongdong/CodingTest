  function solution(message, spoiler_ranges) {
      const words = [];
      let i = 0;
      while (i < message.length) {
          if (message[i] === ' ') { i++; continue; }
          let j = i;
          while (j < message.length && message[j] !== ' ') j++;
          words.push({ word: message.slice(i, j), start: i, end: j - 1 });
          i = j;
      }

      for (const w of words) {
          w.revealIdx = -1;
          for (let r = 0; r < spoiler_ranges.length; r++) {
              const [rs, re] = spoiler_ranges[r];
              if (w.start <= re && w.end >= rs) {
                  w.revealIdx = r; 
              }
          }
      }

      const publicWords = new Set(
          words.filter(w => w.revealIdx === -1).map(w => w.word)
      );

      const revealedSpoilerWords = new Set();
      let answer = 0;

      for (let r = 0; r < spoiler_ranges.length; r++) {
          const revealed = words.filter(w => w.revealIdx === r);

          for (const w of revealed) {
              if (publicWords.has(w.word)) continue;         
              if (revealedSpoilerWords.has(w.word)) continue; 
              answer++;
              revealedSpoilerWords.add(w.word);
          }
      }

      return answer;
  }