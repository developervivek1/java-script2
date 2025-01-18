// 1. Write a JavaScript function to calculate the sum of two numbers.  
    function sum(a,b){
        return a+b;
        
    }
    console.log(sum(3,5));

// 2. Write a JavaScript program to find the maximum number in an array. 
    const numbers = [2,3,5,10,35,55,101];
    const maxNum = Math.max(...numbers);
    console.log(maxNum);
    // OR
    function maxNum2(numbers){
        return Math.max(...numbers);
    }
    console.log(maxNum2(numbers));
    
    // OR
    function findMax(arr) {
        // Initialize max to the first element of the array
        let max = arr[0];
        // Iterate through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];  // Update max if a larger element is found
            }
        }
        return max;
    }
    // Example usage
    const numbers1 = [10, 20, 5, 40, 25];
    console.log(findMax(numbers1)); // Output: 40


// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
    const str = "jahaj";
    function strPal(){
        if(str === str.split("").reverse().join("")){
            return "its a palindrome"
        }else{
            return "false"
        }
    }
    const check = strPal(str);
    console.log(check);
    // Testing
    console.log(str.split("").reverse().join(""));


// 4. Write a JavaScript program to reverse a given string. 
    const str2 = "javascript";
    const reverseStr = str2.split("").reverse().join("");
    console.log(reverseStr);


// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers  
    const arryNum = [1,2,3,4,5,6,7,8,9]
  
    function evenfun(){
        return arryNum.filter((num)=>{
            return num % 2 ===0
        })
    }
    console.log(evenfun());


// 6. Write a JavaScript program to calculate the factorial of a given number. 
    const givenNum = 5;
    
    function facNum(givenNum){
         let result = 1;
         for(let i=1; i<=givenNum; i++){
            result = result*i;
         }
         return result;
    }  
    console.log(facNum(5)) 

    // OR

    function factorialRecursive(n) {
        if (n < 0) {
            return "Factorial is not defined for negative numbers.";
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorialRecursive(n - 1);
    }
    
    // Example usage
    const number = 5;
    console.log(`Factorial of ${number} is:`, factorialRecursive(number));



// 7. Write a JavaScript function to check if a given number is prime.
    //  prime number means which is divisible by itself 0,1 is not a prime num and 2 is prime number 
    let pNumber = 7;
    function isPrime(){
        if(pNumber <=1){
            return false;
        } else if (pNumber===2) {
            return true;
        } else if (pNumber % 2 === 0){
            return false;
        }
        for (let i =2; i<=Math.sqrt(pNumber); i++){
            if(pNumber % i === 0) return false;
        }
        return "true";
    } 
    console.log(`this number ${pNumber} is prime`, isPrime())


// 8. Write a JavaScript program to find the largest element in a nested array.     
// Example usage
    const nestedArray = [1, [3, 5, [7, 8], 4], 10, [2, [11, [15]]]];
    function findLargestInNestedArray(arr) {
        let max = -Infinity;

        for (const element of arr) {
            if (Array.isArray(element)) {
                // Recursively find the max in a nested array
                max = Math.max(max, findLargestInNestedArray(element));
            } else if (typeof element === "number") {
                max = Math.max(max, element);
            }
        }

        return max;
    }
    const largestElement = findLargestInNestedArray(nestedArray);
    console.log("The largest element is:", largestElement);

    // OR

    function findLargestInNestedArray(nestedArray) {
        // Flatten the nested array using flat()
        const flattenedArray = nestedArray.flat(Infinity); // Flatten to any depth
        // Find the maximum value
        return Math.max(...flattenedArray);
    }
    
    // Example usage
    // const nestedArray = [[10, 20], [30, [40, 50]], [5, [100, 3]]];
    // const largestElement = findLargestInNestedArray(nestedArray);
    console.log("The largest element from nested array is :", largestElement);
        
// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
    function generateFibonacci(n) {
        if (n <= 0) {
            return "Number of terms must be greater than 0.";
        }
        const fibonacci = [0, 1]; // Start with the first two terms
        for (let i = 2; i < n; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci.slice(0, n); // Return the first `n` terms
    }

    // Example usage
    const terms = 10;
    console.log(`Fibonacci sequence up to ${terms} terms:`, generateFibonacci(terms));


// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
    const strTitle = "my name is vivek pathak";
    
    console.log(strTitle.split(' ').map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' '))



//11 4. Write a recursive function to calculate the factorial of a given number.     
    const num = 5;
    function factorial(num) { 

        if (num <= 1){
            return 1; 
        } else{
            return num * factorial(num - 1); 
        }
    }
    console.log(factorial(5));


//12 5. Implement a function that takes a arrays and sort them without using any built-in sorting functions. 
    function customSort(array) {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap the elements
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }

    // Example usage
    const numbersSort = [64, 34, 25, 12, 22, 11, 90];
    console.log("Sorted array:", customSort(numbersSort));

//13 5. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 
    function mergeSortedArrays(arr1, arr2) {
        let mergedArray = [];
        let i = 0, j = 0;

        // Compare elements from both arrays and add the smaller one to the merged array
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }
        }

        // Add any remaining elements from arr1
        while (i < arr1.length) {
            mergedArray.push(arr1[i]);
            i++;
        }

        // Add any remaining elements from arr2
        while (j < arr2.length) {
            mergedArray.push(arr2[j]);
            j++;
        }

        return mergedArray;
    }

    // Example usage
    const sortedArray1 = [1, 3, 5, 7];
    const sortedArray2 = [2, 4, 6, 8];
    const result = mergeSortedArrays(sortedArray1, sortedArray2);
    console.log("Merged Sorted Array:", result);


//14 8. Implement a function that flattens a nested array in JavaScript, converting it into a single-level array. 
    function flattenArray(array) {
        return array.flat(Infinity); // Flatten to any depth
    }

    // Example usage
    const nestedArray2 = [1, [2, [3, 4], 5], 6, [7, [8, [9]]]];
    const flattened = flattenArray(nestedArray2);
    console.log("Flattened Array:", flattened);



//15 9. Write a function that determines if two strings are anagrams of each other  
    function areAnagrams(str1, str2) {
        return str1.split("").sort().join("") === str2.split("").sort().join("");
    }
    // Example usage
    console.log(areAnagrams("listen", "silent")); // true
    console.log(areAnagrams("hello", "world"));   // false


//16 2. Implement a function to reverse a string without using the built-in reverse() method.     
    function reverseString(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    // Example usage
    console.log(reverseString("hello")); // "olleh"


//17 3. Given an array of numbers, write a function to find the largest and smallest numbers in the array.     
    function findLargestAndSmallest(arr) {
        const largest = Math.max(...arr);
        const smallest = Math.min(...arr);
        return { largest, smallest };
    }

    // Example usage
    const numbers2 = [10, 5, 8, 20, -3, 50, 0];
    const result2 = findLargestAndSmallest(numbers2);
    console.log(result2); // { largest: 50, smallest: -3 }


//18 4. Write a function that takes an array of integers as input and returns a new array with only the unique elements. 
    function getUniqueElements(arr) {
        const uniqueElements = [];

        for (let i = 0; i < arr.length; i++) {
            if (!uniqueElements.includes(arr[i])) {
                uniqueElements.push(arr[i]);
            }
        }

        return uniqueElements;
    }
    // Example usage
    const numbers3 = [1, 2, 3, 1, 2, 4, 5, 6, 4];
    const uniqueNumbers2 = getUniqueElements(numbers3);
    console.log(uniqueNumbers2); // [1, 2, 3, 4, 5, 6]

    // OR

    function getUniqueElements(arr) {
        return arr.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
    }
    // Example usage
    const numbers4 = ["apple","apple","orange","banana","banana"];
    const uniqueNumbers3 = getUniqueElements(numbers4);
    console.log(uniqueNumbers3); // [1, 2, 3, 4, 5]


//19 7. Implement a function to find the sum of all the numbers in an array.
    function sumOfArray(arr) {
        return arr.reduce((sum, current) => sum + current, 0);
    }
    
    // Example usage
    const numbersAll = [1, 2, 3, 4, 5];
    const sum1 = sumOfArray(numbersAll);
    console.log(sum1); // 15


//20 8. Given a string, write a function to count the occurrences of each character in the string.  
    function countCharacterOccurrences(str) {
        const count = {};
        
        for (let char of str) {
            count[char] = count[char] ? count[char] + 1 : 1;
        }
        
        return count;
    }

    // Example usage
    const string = "hello world";
    const occurrences = countCharacterOccurrences(string);
    console.log(occurrences); 

    // OR
    let str1 = "I want to count the number of occurrences of each char in this string";
    let obj = {};

    for (let item of str1) {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    }

    console.log(obj);


//21 1. Write a function that reverses the order of words in a sentence without using the built-in reverse() method.     
    function reverseWords(sentence) {
        const words = sentence.split(' '); // Split the sentence into words
        let reversedSentence = '';
        for (let i = words.length - 1; i >= 0; i--) {
            reversedSentence += words[i] + ' ';
        }
        return reversedSentence.trim(); // Remove trailing space
    }
    // Example usage
    const sentence2 = "Hello world this is JavaScript";
    const reversed2 = reverseWords(sentence2);
    console.log(reversed2); // "JavaScript is this world Hello"

    // OR

    function reverseWords(sentence) {
        return sentence.split(' ').reduce((reversed, word) => word + ' ' + reversed, '').trim();
    }
    // Example usage
    const sentence = "Hello world this is JavaScript";
    const reversed = reverseWords(sentence);
    console.log(reversed); // "JavaScript is this world Hello"


//22 4. Implement a function that removes duplicates from an array, keeping only the unique elements.     
    function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    // Example usage
    const numbers5 = [1, 2, 2, 3, 4, 4, 5];
    const uniqueNumbers = removeDuplicates(numbers5);
    console.log(uniqueNumbers); // [1, 2, 3, 4, 5]


//23 6. Implement a function that flattens a nested array into a single-dimensional array. 
    function flattenArray(arr) {
        return arr.flat();
    }

    // Example usage
    const nestedArray3 = [1, [2, 3], [4, [5, 6]]];
    const flattenedArray = flattenArray(nestedArray3);
    console.log(flattenedArray); // [1, 2, 3, 4, [5, 6]]

//24 7. Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order).     
    function isAnagram(str1, str2) {
        const sortedStr1 = str1.split("").sort().join("");
        const sortedStr2 = str2.split("").sort().join("");
        return sortedStr1 === sortedStr2;
    }

    // Example usage
    console.log(isAnagram("listen", "silent")); // true
    console.log(isAnagram("hello", "world"));   // false


//25 8. Implement a function that finds the second smallest element in an array of integers.     
    function secondSmallest(arr) {
        if (arr.length < 2) {
            throw new Error("Array must have at least two elements");
        }
    
        const sortedArr = [...arr].sort((a, b) => a - b); // Copy and sort the array
        return sortedArr[1];
    }
    
    // Example usage
    console.log(secondSmallest([4, 2, 6, 1, 5])); // Output: 2


//26 9. Write a function that generates a random alphanumeric string of a given length.     
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }

        return result;
    }

    // Example usage
    console.log(generateRandomString(10)); // Example: "A1bC2dE3Fg"


//27 10. Implement a function that converts a number to its Roman numeral representation.     
//28 4. Implement a function that returns the average value of numbers in an array. 
    function calculateAverage(arr) {
        if (arr.length === 0) {
            throw new Error("Array cannot be empty");
        }

        const sum = arr.reduce((acc, num) => acc + num);
        return sum / arr.length;
    }

    // Example usage
    const numbers6 = [2, 4, 6, 8, 10];
    console.log(calculateAverage(numbers6)); // Output: 6


//29. 5. Write a function that sorts an array of strings in alphabetical order.     
    function sortStrings(arr) {
        return arr.slice().sort();
    }

    // Example usage
    const strings = ["banana", "apple", "grape", "kiwi"];
    console.log(sortStrings(strings)); // Output: ["apple", "banana", "grape", "kiwi"]

//30. 6. Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.     
    function findElementIndex(arr, element) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                return i;
            }
        }
        return -1; // If element is not found
    }

    // Example usage
    const numbers7 = [10, 20, 30, 40, 50];
    console.log(findElementIndex(numbers7, 30)); // Output: 2
    console.log(findElementIndex(numbers7, 60)); // Output: -1


//31. 7. Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 
    function removeFalsyValues(arr) {
        return arr.filter(Boolean);
    }
    
    // Example usage
    console.log(removeFalsyValues([0, 1, false, "", null, 2, undefined, 3])); 
    // Output: [1, 2, 3]
    
//32. 9. Write a function that finds the second largest number in an array.   
    function findSecondLargest(arr) {
        arr.sort((a, b) => b - a);  // Corrected the subtraction symbol
        return arr[1];  // The second largest element after sorting
    }

    // Example usage
    console.log(findSecondLargest([10, 20, 4, 45, 99])); // Output: 45


//33. What are higher order functions, and what are their benefits?
    const primes = [3, 5, 7, 11];
    // pass a function to map
    const doubledPrimes = primes.map((x) => x * 2);
    console.log(doubledPrimes);
    // expected output: Array [6, 10, 14, 22]


//34. Write a loop that prints every number divisible by 3 from 1-200:    
    for (let i = 1; i < 201; i++) {
        if (i % 3 === 0) {
        }
        // console.log(i);
    }

    
//35. What is JSON? And how would you convert JSON strings into objects, or convert an object into a JSON string?    
    // JSON.parse();
    // JSON.stringify();

//36. What are the .slice() and .splice() methods, and how do they differently affect arrays?    
    // .slice() doesn’t modify the original array, and returns the elements from the array, minus the instructed elements to be sliced off based on the numbers instructed in the brackets.
    // If one parameter is written, this will be used as the start parameter, and if two parameters are written, the second element will be used as the end parameter.
    const reasonsToTryBootdotdev = [
        "free trial",
        "interactive",
        "browser based",
        "helpful community",
        "range of content",
      ];
      
      reasonsToTryBootdotdev.slice(2, 4);
      // ["browser based", "helpful community"]

    //   The .splice() method instead modifies the original array. It returns the deleted elements as arrays, and is often use to insert or remove elements to or from an existing array.      
    const reasonsToTryBootdotdev2 = [
        "free trial",
        "interactive",
        "browser based",
        "helpful community",
        "range of content",
      ];
      const removed = reasonsToTryBootdotdev2.splice(2, 4);
      console.log(reasonsToTryBootdotdev2);
      // ["free trial","interactive"]
      
      console.log(removed);
      // ["browser based","helpful community","range of content"]
    