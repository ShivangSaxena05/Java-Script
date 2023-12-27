function isPerfectNumber(number=50) {
    if (number <= 0) {
        return false;
    }
    let divisorSum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            divisorSum += i;
        }
    }
    console.log(divisorSum==number)
}
isPerfectNumber()