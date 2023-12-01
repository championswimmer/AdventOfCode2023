import { readLines } from "../commons/io.ts";

function main() {
  const lines = readLines("day-01/input.txt");
  let answer = 0;
  lines.forEach((line) => {
    const newLine = stringNumReplacer(line);
    const sum = findLineSum(newLine);
    // console.log(line, " -> ", newLine, " -> ", sum)
    answer += sum;
  });

  console.log("answer:", answer);
}

function stringNumReplacer(line: string) {
  let newLine = line;
  newLine = newLine.replaceAll("one", "o1ne");
  newLine = newLine.replaceAll("two", "t2wo");
  newLine = newLine.replaceAll("three", "th3ree");
  newLine = newLine.replaceAll("four", "fo4ur");
  newLine = newLine.replaceAll("five", "fi5ve");
  newLine = newLine.replaceAll("six", "s6ix");
  newLine = newLine.replaceAll("seven", "se7ven");
  newLine = newLine.replaceAll("eight", "ei8ght");
  newLine = newLine.replaceAll("nine", "ni9ne");
  return newLine;
}

function findLineSum(line: string) {
  const chars = line.split("");
  let leftPtr = 0,
    rightPtr = chars.length - 1;
  let leftNum = 0,
    rightNum = 0;
  for (;;) {
    const char = chars[leftPtr];
    // check if char is num
    const num = parseInt(char);
    if (Number.isNaN(num)) {
      leftPtr++;
      continue;
    } else {
      leftNum = num;
      break;
    }
  }
  for (;;) {
    const char = chars[rightPtr];
    // check if char is num
    const num = parseInt(char);
    if (Number.isNaN(num)) {
      rightPtr--;
      continue;
    } else {
      rightNum = num;
      break;
    }
  }
  return Number(`${leftNum}${rightNum}`);
}

main();
