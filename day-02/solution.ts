import { readLines } from "../commons/io.ts";

/*
 * Sample Input 
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
 */

function main() {
  const lines = readLines("day-02/input.txt");
  let gameIdSum = 0;
  let minPowerSum = 0;
  lines.forEach((line) => {
    const gameInfo = gameParser(line);
    let allGamesValid = true;
    minPowerSum += findPower(findMinimumSet(gameInfo));
    for (const game of gameInfo.games) {
      if (!gameValidator(game)) {
        allGamesValid = false;
        return;
      }
    }
    if (allGamesValid) {
      gameIdSum += gameInfo.gameID;
    }

  });

  console.log("Game ID Sum: ", gameIdSum);
  console.log("Minimum Power Sum: ", minPowerSum);
}

const RED_MAX = 12;
const GREEN_MAX = 13;
const BLUE_MAX = 14;

type Color = "red" | "green" | "blue";

class Game {
  red = 0;
  green = 0;
  blue = 0;
}

class GameInfo {
  gameID = 0;
  games: Game[] = [];
}

function gameParser(line: string): GameInfo {
  const [gameIDstr, gameDatas] = line.split(":");
  const gameID = gameIDstr.split(" ")[1];
  const games: Game[] = [];
  const gameStrings = gameDatas.split(";");
  gameStrings.forEach((gameString) => {
    const colorData = gameString.split(",");
    const game = new Game();
    colorData.forEach((colorData) => {
      const [num, color] = colorData.trim().split(" ");
      game[color as Color] = +num;
    });
    games.push(game);
  });
  return {
    gameID: +gameID,
    games,
  };
}

function gameValidator(game: Game) {
  const { red, green, blue } = game;
  if (red > RED_MAX || green > GREEN_MAX || blue > BLUE_MAX) {
    return false;
  }
  return true;
}

function findMinimumSet(gameInfo: GameInfo) {
  const { games } = gameInfo;
  const minimumSet: Game = { red: 0, green: 0, blue: 0}
  for (const game of games) {
    if (game.red > minimumSet.red) {
      minimumSet.red = game.red;
    }
    if (game.green > minimumSet.green) {
      minimumSet.green = game.green;
    }
    if (game.blue > minimumSet.blue) {
      minimumSet.blue = game.blue;
    }
  }
  return minimumSet;
}

function findPower(game: Game) {
  return game.red * game.green * game.blue;
}

main();
