import { readLines } from "../commons/io.ts";

/* Sample Input 
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
*/
interface Card {
  cardId: string;
  winningNums: number[];
  cardNums: number[];
}
function main() {
  const lines = readLines("day-04/input.txt");
  let gameSum = 0;
  lines.forEach((line) => {
    const card = parseLine(line);
    const winningNums = findWinningNums(card);
    const totalWinningNums = winningNums.length;
    gameSum += totalWinningNums > 0 ? Math.pow(2, totalWinningNums - 1): 0;
  });
  console.log("Game Sum: ", gameSum);
}

function parseLine(line: string): Card {
  const [cardIdStr, cardDataStr] = line.split(":");
  const cardId = cardIdStr.split(/ +/).pop()!;
  const cardData = cardDataStr.split("|");
  const winningNums = cardData[0].trim().split(/ +/).map(Number);
  const cardNums = cardData[1].trim().split(/ +/).map(Number);
  return {
    cardId,
    winningNums,
    cardNums,
  };
}

function findWinningNums(card: Card): number[] {
  const winningNums = [];
  for (const cardNum of card.cardNums) {
    if (card.winningNums.includes(cardNum)) {
      winningNums.push(cardNum);
    }
  }
  return winningNums;
}

main();
