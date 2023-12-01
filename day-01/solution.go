package main

import (
	cio "commons"
	"fmt"
	"strconv"
	"strings"
)

func main() {
	lines := cio.ReadLines("day-01/input.txt")
	answer := 0
	for _, line := range lines {
		newLine := stringNumReplacer(line)
		sum := findLineSum(newLine)
		answer += sum
	}
	fmt.Println("answer:", answer)
}

func stringNumReplacer(line string) string {
	newLine := line
	newLine = strings.ReplaceAll(newLine, "one", "o1ne")
	newLine = strings.ReplaceAll(newLine, "two", "t2wo")
	newLine = strings.ReplaceAll(newLine, "three", "th3ree")
	newLine = strings.ReplaceAll(newLine, "four", "fo4ur")
	newLine = strings.ReplaceAll(newLine, "five", "fi5ve")
	newLine = strings.ReplaceAll(newLine, "six", "s6ix")
	newLine = strings.ReplaceAll(newLine, "seven", "se7ven")
	newLine = strings.ReplaceAll(newLine, "eight", "ei8ght")
	newLine = strings.ReplaceAll(newLine, "nine", "ni9ne")
	return newLine
}

func findLineSum(line string) int {
	chars := strings.Split(line, "")
	leftPtr := 0
	rightPtr := len(chars) - 1
	leftNum := 0
	rightNum := 0
	for {
		char := chars[leftPtr]
		num, err := strconv.Atoi(char)
		if err != nil {
			leftPtr++
			continue
		} else {
			leftNum = num
			break
		}
	}
	for {
		char := chars[rightPtr]
		num, err := strconv.Atoi(char)
		if err != nil {
			rightPtr--
			continue
		} else {
			rightNum = num
			break
		}
	}
	return leftNum*10 + rightNum
}
