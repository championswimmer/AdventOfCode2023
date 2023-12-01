#!/usr/bin/env sh

solve() {
    LANG=$1
    DAY=$2

    case $LANG in
    "go" | "golang")
      RUN_CMD="go run"
      EXT=".go"
      ;;
    "kt" | "kotlin")
      RUN_CMD="kscript"
      EXT=".kts"
      ;;
    "rs" | "rust")
      RUN_CMD="rust-script"
      EXT=".rs"
      ;;
    "ts" | "typescript")
      RUN_CMD="deno run -A"
      EXT=".ts"
      ;;
    "py" | "python")
      RUN_CMD="python"
      EXT=".py"
      ;;
    esac

    echo "Running $LANG solution for day $DAY"
    time $RUN_CMD day-"$DAY"/solution$EXT
}

LANG=$1
DAY=$2

if [ -z "$LANG" ]
  then
    echo "Which language? (go, kotlin, rust, typescript, python) "
    read LANG
fi

if [ -z "$DAY" ]
  then
    echo "Which day? (01, 02, ... 25) "
    read DAY
fi

solve "$LANG" "$DAY"


## run go solutions
#go run day-01/solution.go
#go run day-02/solution.go
#
## run kotlin solutions
#kscript day-01/solution.kts
#kscript day-02/solution.kts
#
## run rust solutions
#rust-script day-01/solution.rs
#rust-script day-02/solution.rs
#
## run typescript solutions
#deno run -A day-01/solution.ts
#deno run -A day-02/solution.ts
#
## run python solutions
#python day-01/solution.py
#python day-02/solution.py