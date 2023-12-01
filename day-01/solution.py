# pylint: disable=missing-module-docstring,missing-function-docstring,import-error,wrong-import-position
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
from typing import List
from commons.io import readLines


def main():
    lines: List[str] = readLines("day-01/input.txt")
    answer = 0
    for line in lines:
        new_line = string_num_replacer(line)
        line_sum = find_line_sum(new_line)
        # print(line, " -> ", new_line, " -> ", sum)
        answer += line_sum

    print("answer:", answer)


def string_num_replacer(line: str) -> str:
    new_line: str = line
    new_line = new_line.replace("one", "o1ne")
    new_line = new_line.replace("two", "t2wo")
    new_line = new_line.replace("three", "th3ree")
    new_line = new_line.replace("four", "fo4ur")
    new_line = new_line.replace("five", "fi5ve")
    new_line = new_line.replace("six", "s6ix")
    new_line = new_line.replace("seven", "se7ven")
    new_line = new_line.replace("eight", "ei8ght")
    new_line = new_line.replace("nine", "ni9ne")
    return new_line


def find_line_sum(line: str) -> int:
    chars: List[str] = list(line)
    left_ptr: int = 0
    right_ptr: int = len(chars) - 1
    left_num: int = 0
    right_num: int = 0
    while True:
        char: str = chars[left_ptr]
        # check if char is num
        num: int = int(char) if char.isdigit() else None
        if num is None:
            left_ptr += 1
            continue
        left_num = num
        break
    while True:
        char: str = chars[right_ptr]
        # check if char is num
        num: int = int(char) if char.isdigit() else None
        if num is None:
            right_ptr -= 1
            continue
        right_num = num
        break
    return int(f"{left_num}{right_num}")


main()
