package main

import (
	cio "commons"
	"fmt"
	"strconv"
	"strings"
)

const (
	RED_MAX   = 12
	GREEN_MAX = 13
	BLUE_MAX  = 14
)

type Color string

var (
	RED   Color = "red"
	GREEN Color = "green"
	BLUE  Color = "blue"
)

type Game struct {
	red   int
	green int
	blue  int
}

type GameInfo struct {
	gameID int
	games  []Game
}

func main() {
	lines := cio.ReadLines("day-02/input.txt")
	gameIdSum := 0
	minPowerSum := 0
	for _, line := range lines {
		gameInfo := gameParser(line)
		allGamesValid := true
		minPowerSum += findPower(findMinimumSet(gameInfo))
		for _, game := range gameInfo.games {
			if !gameValidator(game) {
				allGamesValid = false
				break
			}
		}
		if allGamesValid {
			gameIdSum += gameInfo.gameID
		}
	}

	fmt.Println("Game ID Sum: ", gameIdSum)
	fmt.Println("Minimum Power Sum: ", minPowerSum)
}

func gameParser(line string) GameInfo {
	data := strings.Split(line, ":")
	gameID, _ := strconv.Atoi(strings.Split(data[0], " ")[1])
	games := []Game{}
	gameDatas := strings.Split(data[1], ";")
	for _, gameData := range gameDatas {
		colorData := strings.Split(gameData, ",")
		game := Game{}
		for _, colorData := range colorData {
			colorData = strings.TrimSpace(colorData)
			colorNum := strings.Split(colorData, " ")
			num, _ := strconv.Atoi(colorNum[0])
			color := Color(colorNum[1])
			switch color {
			case RED:
				game.red = num
			case GREEN:
				game.green = num
			case BLUE:
				game.blue = num
			}
		}
		games = append(games, game)
	}
	return GameInfo{
		gameID,
		games,
	}
}

func gameValidator(game Game) bool {
	if game.red > RED_MAX || game.green > GREEN_MAX || game.blue > BLUE_MAX {
		return false
	}
	return true
}

func findMinimumSet(gameInfo GameInfo) Game {
	games := gameInfo.games
	minimumSet := Game{}
	for _, game := range games {
		if game.red > minimumSet.red {
			minimumSet.red = game.red
		}
		if game.green > minimumSet.green {
			minimumSet.green = game.green
		}
		if game.blue > minimumSet.blue {
			minimumSet.blue = game.blue
		}
	}
	return minimumSet
}

func findPower(game Game) int {
	return game.red * game.green * game.blue
}
