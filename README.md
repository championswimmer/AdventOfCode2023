# Advent of Code 2023 
All solutions in `Rust`, `Go`, `TypeScript`, `Python` and `Kotlin` 

## Running

There is a sample `run-solns.sh` script that contains
the commands to run all solutions.

To run solutions use this syntax 

```shell
./run-solns.sh go 01 # run day 01 solution in Go
./run-solns.sh kotlin 02 # run day 02 solution in Go
```

The first argument can be
- `go` or `golang` for Go
- `kt` or `kotlin` for Kotlin
- `typescript` or `ts` for TypeScript
- `rs` or `rust` for Rust
- `py` or `python` for Rust

The second argument can be a number from `01` to `25`

## Setup 

### Kotlin 
The Kotlin files are run via [kscript](https://github.com/holgerbrandl/kscript)  


Best way is to install via <https://sdkman.io>

```shell 
sdk install kotlin
sdk install kscript
```

#### Software Versions 
- Kotlin `1.9.21`
- kscript `4.2.3`
- JRE `20.0.2+9`

### Rust 
The Rust files are run via [rust-script](https://rust-script.org/)

First [install Rust](https://www.rust-lang.org/tools/install) (via appropriate package manager for your OS),
then install the rust-script crate. 

```shell
cargo install rust-script
```

#### Software Versions 
- Rust `1.74.0`
- rust-script `0.34.0`

### TypeScript
The TypeScript files are run via [deno](https://deno.land/)

[Install Deno](https://deno.land/manual/getting_started/installation) via appropriate package manager for your OS.

### Go 
The Go files are run via Go's own `go run` process which can 
run a file like a script. 

Just [install Go](https://go.dev/doc/install) via your package manager and get going.

#### Software Versions 
- Go `1.21.0`

### Python
Python scripts are run using Python 3.+ 

[Install Python3](https://www.python.org/downloads/) for your OS.

#### Software Versions
- Python `3.12.0`