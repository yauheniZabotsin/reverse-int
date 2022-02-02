module.exports = function reverse(n) {
    const string = String(n); // приобразование в строку
    const array = Array.from(string); //создание массива из строки
    let newString = '';
    let i = array.length - 1;
    let j = 0;
    while ((i >= 0) && (j < 3)) {
        newString += array[i];
        i--;
        j++;
    }
    return Number(newString)
}
