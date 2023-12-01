import java.io.File

fun readLines(path: String): List<String> {
    return File(path).readLines()
}