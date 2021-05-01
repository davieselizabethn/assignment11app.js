1.
function iseven(number){
    if(number % 2 === 0) {
        return true;
     } else{
            return false;
        }
    };

2.
function getodd(numbers){
    let oddNumbers = [];
    for(let number of numbers) {
        if(!isEven(number)) {
            oddNumbers.push(number)
        }
    }
    return oddNumbers;
};
3.
function getMax(array) {
    let largestNumber = 0; 
    for(const n of array) {
        if(n > largestNumber) {
            largestNumber = n;
        }
    }
    return largestNumber;
    console.log(getMax([3, 17, 4, 25]));
4.
function stringContains(string_1, string_2) {
    string_1 = string_1.toLowerCase();
    string_2 = string_2.toLowerCase();
    console.log(string_1);
    console.log(string_2);
    if(string_1.indexOf(string_2) >
    -1){
    return true;
    } else {
        return false;
    }
}
console.log(stringContains("hello world", "elLO"));
5.
function capitalizeWords(string) {
    let stringToArray = string.split("");
    let result = [];
    for(const word of stringToArray) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(" ");
}
console.log(capitalizeWords("i love programming"));
