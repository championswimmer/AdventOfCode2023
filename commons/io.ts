export function readLines(file: string) {
  return Deno.readTextFileSync(file).split("\n")
}