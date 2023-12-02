# pylint: disable=missing-module-docstring,missing-function-docstring,import-error,wrong-import-position,too-few-public-methods
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
from typing import List, Protocol
from commons.io import readLines

RED_MAX = 12
GREEN_MAX = 13
BLUE_MAX = 14


class GameInfo(Protocol):
    """
    Represents information about a game.
    """
    game_id: int
    games: List[dict]


class Game:
    """
    Represents a game.
    """
    def __init__(self, red = 0, green = 0, blue = 0):
        self.red = red
        self.green = green
        self.blue = blue


def game_parser(line) -> GameInfo:
    game_id_str, game_datas = line.split(":")
    game_id = game_id_str.split(" ")[1]
    games = []
    game_strings = game_datas.split(";")
    for game_string in game_strings:
        color_datas = game_string.split(",")
        game = Game()
        for color_data in color_datas:
            num, color = color_data.strip().split(" ")
            if color == "red":
                game.red = int(num)
            elif color == "green":
                game.green = int(num)
            elif color == "blue":
                game.blue = int(num)
        games.append(game)
    return {
        "game_id": int(game_id),
        "games": games,
    }


def game_validator(game):
    red = game.red
    green = game.green
    blue = game.blue
    if red > RED_MAX or green > GREEN_MAX or blue > BLUE_MAX:
        return False
    return True


def find_minimum_set(game_info) -> Game:
    games = game_info["games"]
    minimum_set = Game()
    for game in games:
        if game.red > minimum_set.red:
            minimum_set.red = game.red
        if game.green > minimum_set.green:
            minimum_set.green = game.green
        if game.blue > minimum_set.blue:
            minimum_set.blue = game.blue
    return minimum_set


def find_power(game):
    return game.red * game.green * game.blue


def main():
    lines: List[str] = readLines("day-02/input.txt")
    game_id_sum = 0
    min_power_sum = 0
    for line in lines:
        game_info = game_parser(line)
        all_games_valid = True
        min_power_sum += find_power(find_minimum_set(game_info))
        for game in game_info["games"]:
            if not game_validator(game):
                all_games_valid = False
                break
        if all_games_valid:
            game_id_sum += game_info["game_id"]

    print("Game ID Sum: ", game_id_sum)
    print("Minimum Power Sum: ", min_power_sum)


main()
