//1.
function reverseNumber(x) {

  let numString = x.toString();

  let reversedString = numString.split('').reverse().join('');

  let reversedNum = parseInt(reversedString);

  return reversedNum;

}

let x = 15243;
let reversed = reverseNumber(x);
console.log(reversed);

//2.
function sortStringAlphabetically(str) {

  let charArray = str.split('');

  charArray.sort();

  let sortedString = charArray.join('');

  return sortedString;
}

let string = 'keyincollege';
let sorted = sortStringAlphabetically(string);
console.log(sorted);

//3.
function getFileExtension(filename) {
  let parts = filename.split('.');

  let extension = parts[parts.length - 1];

  return extension;
}

let filename = 'example.txt';
let extension = getFileExtension(filename);
console.log(extension);

//4.
function getCurrentDate() {
  let currentDate = new Date();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();

  let formattedDate1 = `${month}-${day}-${year}`;

  let formattedDate2 = `${month}/${day}/${year}`;

  let formattedDate3 = `${day}-${month}-${year}`;

  let formattedDate4 = `${day}/${month}/${year}`;

  return {
    'mm-dd-yyyy': formattedDate1,
    'mm/dd/yyyy': formattedDate2,
    'dd-mm-yyyy': formattedDate3,
    'dd/mm/yyyy': formattedDate4
  };
}

let currentDate = getCurrentDate();
console.log(currentDate['mm-dd-yyyy']);
console.log(currentDate['mm/dd/yyyy']);
console.log(currentDate['dd-mm-yyyy']); 
console.log(currentDate['dd/mm/yyyy']);

//5.
function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }

  let firstLetter = str[0];
  let restOfString = str.slice(1);

  if (firstLetter.toLowerCase() === firstLetter) {
    firstLetter = firstLetter.toUpperCase();
  }

  return firstLetter + restOfString;
}

console.log(capitalize('hello'));
console.log(capitalize('WORLD'));
console.log(capitalize(''));
console.log(capitalize(123));

//6.
function checkPeriod(str) {
  if (typeof str !== 'string') {
    return 'no period';
  }

  if (str.includes('.')) {
    return 'contain period';
  } else {
    return 'no period';
  }
}

console.log(checkPeriod('Hello, World.'));
console.log(checkPeriod('This sentence does not have a period'));
console.log(checkPeriod(''));
console.log(checkPeriod(123));

//7.
function putSuffix(num) {
  if (typeof num !== 'number') {
    return;
  }

  let suffix;
  if (num % 10 === 1 && num % 100 !== 11) {
    suffix = 'st';
  } else if (num % 10 === 2 && num % 100 !== 12) {
    suffix = 'nd';
  } else if (num % 10 === 3 && num % 100 !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return num.toString() + suffix;
}

console.log(putSuffix(22));
console.log(putSuffix(23));
console.log(putSuffix(11));
console.log(putSuffix(1));
console.log(putSuffix(100));
console.log(putSuffix('abc'));
