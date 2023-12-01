@file:Import("../commons/io.kts")

fun main() {
    val lines: List<String> = readLines("day-01/input.txt")
    var answer = 0
    lines.forEach { line ->
        val newLine = stringNumReplacer(line)
        val sum = findLineSum(newLine)
        // println("$line -> $newLine -> $sum")
        answer += sum
    }
    println("answer: $answer")
}

fun stringNumReplacer(line: String): String {
  var newLine = line
  newLine = newLine.replace("one", "o1ne")
  newLine = newLine.replace("two", "t2wo")
  newLine = newLine.replace("three", "th3ree")
  newLine = newLine.replace("four", "fo4ur")
  newLine = newLine.replace("five", "fi5ve")
  newLine = newLine.replace("six", "s6ix")
  newLine = newLine.replace("seven", "se7ven")
  newLine = newLine.replace("eight", "ei8ght")
  newLine = newLine.replace("nine", "ni9ne")
  return newLine
}

fun findLineSum(line: String): Int {
    val chars = line.split("")
    var leftPtr = 0
    var rightPtr = chars.size - 1
    var leftNum = 0
    var rightNum = 0
    while (true) {
        val char = chars[leftPtr]
        // check if char is num
        val num = char.toIntOrNull()
        if (num == null) {
            leftPtr++
            continue
        } else {
            leftNum = num
            break
        }
    }
    while (true) {
        val char = chars[rightPtr]
        // check if char is num
        val num = char.toIntOrNull()
        if (num == null) {
            rightPtr--
            continue
        } else {
            rightNum = num
            break
        }
    }
    return "${leftNum}${rightNum}".toInt()
}
main()
