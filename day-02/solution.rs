// cargo-deps: commons = { path = "../commons" }

const RED_MAX: i32 = 12;
const GREEN_MAX: i32 = 13;
const BLUE_MAX: i32 = 14;

enum Color {
    Red,
    Green,
    Blue,
}

struct Game {
    red: i32,
    green: i32,
    blue: i32,
}

struct GameInfo {
    game_id: i32,
    games: Vec<Game>,
}

fn main() {
    let lines = io::read_lines("day-02/input.txt");
    let mut min_power_sum = 0;
    let mut game_id_sum = 0;
    for line in lines {
        let game_info = game_parser(&line);
        let mut all_games_valid = true;
        min_power_sum += find_power(find_minimum_set(&game_info));
        for game in game_info.games {
            if !game_validator(game) {
                all_games_valid = false;
                break;
            }
        }
        if all_games_valid {
            game_id_sum += game_info.game_id;
        }
    }

    println!("Game ID Sum: {}", game_id_sum);
    println!("Minimum Power Sum: {}", min_power_sum);
}

fn game_parser(line: &str) -> GameInfo {
    let data: Vec<&str> = line.split(":").collect();
    let game_id = data[0].split(" ").collect::<Vec<&str>>()[1]
        .parse::<i32>()
        .unwrap();
    let mut games = Vec::new();
    let game_datas = data[1].split(";");
    for game_data in game_datas {
        let mut game = Game {
            red: 0,
            green: 0,
            blue: 0,
        };
        let color_data = game_data.split(",");
        for color_data in color_data {
            let color_data = color_data.trim();
            let color_num: Vec<&str> = color_data.split(" ").collect();
            let num = color_num[0].parse::<i32>().unwrap();
            let color = match color_num[1] {
                "red" => Color::Red,
                "green" => Color::Green,
                "blue" => Color::Blue,
                _ => panic!("Invalid color!"),
            };
            match color {
                Color::Red => game.red = num,
                Color::Green => game.green = num,
                Color::Blue => game.blue = num,
            };
        }
        games.push(game);
    }
    GameInfo { game_id, games }
}

fn game_validator(game: Game) -> bool {
    if game.red > RED_MAX || game.green > GREEN_MAX || game.blue > BLUE_MAX {
        return false;
    }
    true
}

fn find_minimum_set(game_info: &GameInfo) -> Game {
    let games = &game_info.games;
    let mut minimum_set = Game {
        red: 0,
        green: 0,
        blue: 0,
    };
    for game in games {
        if game.red > minimum_set.red {
            minimum_set.red = game.red;
        }
        if game.green > minimum_set.green {
            minimum_set.green = game.green;
        }
        if game.blue > minimum_set.blue {
            minimum_set.blue = game.blue;
        }
    }
    minimum_set
}

fn find_power(game: Game) -> i32 {
    game.red * game.green * game.blue
}