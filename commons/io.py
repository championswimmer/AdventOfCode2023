def readLines(path):
  with open(path) as file:
    return file.read().splitlines()
