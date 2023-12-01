use std::fs;

pub fn read_lines(filename: &str) -> Vec<String> {
    let data = fs::read_to_string(filename).expect("Failed to read file");
    let lines = data.lines()
        .map(|line| line.to_string())
        .collect::<Vec<String>>();
    return lines;
}