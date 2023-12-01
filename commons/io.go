package cio

import (
	"fmt"
	"os"
	"strings"
)

func ReadLines(path string) []string {
	data, err := os.ReadFile(path)
	if err != nil {
		panic(fmt.Errorf("read file %s error: %s", path, err))
	}

	return strings.Split(string(data), "\n")
}
