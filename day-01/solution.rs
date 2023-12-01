// cargo-deps: commons = { path = "../commons" }

fn main() {
    let lines = io::read_lines("day-01/input.txt");
    let mut answer = 0;
    for line in lines {
        let new_line = string_num_replacer(&line);
        let sum = find_line_sum(&new_line);
        // println!("{} -> {} -> {}", line, new_line, sum);
        answer += sum;
    }

    println!("answer: {}", answer);
}

fn string_num_replacer(line: &str) -> String {
    let mut new_line = line.to_string();
    new_line = new_line.replace("one", "o1ne");
    new_line = new_line.replace("two", "t2wo");
    new_line = new_line.replace("three", "th3ree");
    new_line = new_line.replace("four", "fo4ur");
    new_line = new_line.replace("five", "fi5ve");
    new_line = new_line.replace("six", "s6ix");
    new_line = new_line.replace("seven", "se7ven");
    new_line = new_line.replace("eight", "ei8ght");
    new_line = new_line.replace("nine", "ni9ne");
    new_line
}

fn find_line_sum(line: &str) -> i32 {
    let chars = line.chars().collect::<Vec<char>>();
    let mut left_ptr = 0;
    let mut right_ptr = chars.len() - 1;
    let left_num: i32;
    let right_num: i32;

    loop {
        let char = chars[left_ptr];
        // check if char is num
        let num = char.to_digit(10);
        if num.is_none() {
            left_ptr += 1;
            continue;
        } else {
            left_num = num.unwrap() as i32;
            break;
        }
    }

    loop {
        let char = chars[right_ptr];
        // check if char is num
        let num = char.to_digit(10);
        if num.is_none() {
            right_ptr -= 1;
            continue;
        } else {
            right_num = num.unwrap() as i32;
            break;
        }
    }

    format!("{}{}", left_num, right_num).parse::<i32>().unwrap()
}
