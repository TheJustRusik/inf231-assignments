function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * calculateFactorial(n - 1)
    }
}

function isPalindrome(str) {
    // Remove spaces and punctuation and convert to lowercase
    const cleanedStr = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    // Compare the cleaned string with its reverse
    return cleanedStr === reversedStr;
}

function arrayOperations(numbers) {
    if (numbers.length === 0) {
        return {
            sum: 0,
            average: 0,
            max: undefined,
            min: undefined,
        };
    }
  
    const sum = numbers.reduce((acc, current) => acc + current, 0);
  
    const average = sum / numbers.length;
  
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
  
    return {
        sum: sum,
        average: average,
        max: max,
        min: min,
    };
}

function reverseString(str) {
    const charArray = str.split('');
  
    const reversedArray = charArray.reverse();
  
    const reversedStr = reversedArray.join('');
  
    return reversedStr;
}

//1
console.log(`The factorial of ${5} is ${calculateFactorial(5)}`)

//2
console.log(`${'A man, a plan, a canal, Panama!'} palindrom: ${isPalindrome('A man, a plan, a canal, Panama!')}`)

//3
const numbers = [5, 2, 9, 1, 5, 6];
const result = arrayOperations(numbers);

console.log(numbers)
console.log("Sum:", result.sum);
console.log("Average:", result.average);
console.log("Maximum:", result.max);
console.log("Minimum:", result.min);

//4
const str = "ZIGGGGGG"
console.log(`String: ${str} reverse: ${ reverseString(str) }`)

//5
function dateDifference(startDate, endDate) {
    const diffMilliseconds = endDate - startDate;
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const daysDifference = Math.floor(diffMilliseconds / millisecondsInDay);
  
    return daysDifference;
}
  
  // Function to format a date as "YYYY-MM-DD"
  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
}

// Function to add or subtract days from a given date
function addDaysToDate(date, daysToAdd) {
const newDate = new Date(date);
newDate.setDate(date.getDate() + daysToAdd);
return newDate;
}

// Example usage:
const startDate = new Date('2023-10-01');
const endDate = new Date('2023-10-10');

const difference = dateDifference(startDate, endDate);
console.log(`Days Difference: ${difference}`);

const formattedDate = formatDateToYYYYMMDD(startDate);
console.log(`Formatted Date: ${formattedDate}`);

const newDate = addDaysToDate(startDate, 5);
console.log(`New Date after adding 5 days: ${formatDateToYYYYMMDD(newDate)}`);

//6
function findLargestElement(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    let largest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
}
  
// Example usage:
const umbers = [10, 5, 25, 8, 30];
const largest = findLargestElement(umbers);
console.log(`Largest element in the array: ${largest}`);

function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 5];
const arrayWithoutDuplicates = [1, 2, 3, 4, 5];

console.log(`Array with duplicates: ${hasDuplicates(arrayWithDuplicates)}`);
console.log(`Array without duplicates: ${hasDuplicates(arrayWithoutDuplicates)}`);

function findLongestWord(sentence) {
    const words = sentence.split(/\s+/); // Split the sentence into words
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
}

// Example usage:
const inputSentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(inputSentence);
console.log(`Longest word in the sentence: ${longestWord}`);


