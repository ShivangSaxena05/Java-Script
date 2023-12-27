function print_table(n=5, i = 1) {
    if (i == 11)
        return;
    console.log(n + " * " + i + " = " + n * i);
    i++;
    print_table(n, i);
}
print_table()