fileName <- "rounds.txt"
rounds <- as.numeric(readChar(fileName, file.info(fileName)$size))

x = 1.0
pi = 1.0

for (i in 2:(rounds + 2)){
  x = x * -1
  pi = pi + (x / (2 * i - 1))
}

pi = pi * 4

printf <- function(...) cat(sprintf(...))
printf("%.16f\n", pi)
