const addSum =(a,b)=>{
    return a+b;
}
console.log(`1. total add is`, addSum(3,5));


const numbers = [2,3,5,10,35,55,101];
// console.log(Math.max(...numbers))
const findMax=(arr)=>{
    let max = arr[0]
    for(i=0; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
console.log(`2. fun maximum number found in an arry is`, findMax(numbers))



const str = "jahaj";
const palFun=()=>{
    if(str===str.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}
console.log(`3. palindrom is`, palFun(str))


const str2 = "javacript";
console.log(`4. reverse of javascript is `,str2.split('').reverse().join(''))


const arryNum = [1,2,3,4,5,6,7,8,9];
// const evenFun=()=>{
//     return arryNum.filter((num)=>{
//         return num % 3===0;
//     })
// }

const evenFun =(arr)=>{
    const evenNum = [];
    for(let i=0; i < arr.length;i++){
        if(arr[i]%2===0){
            evenNum.push(arr[i]);
        }
    }
    return evenNum;
}
console.log(`5. filtered even number is`,evenFun(arryNum));


const givenNum = 5;
    function facNum(){
        let result = 1;
        for(i=1;i<=givenNum;i++){
            result = result*i;
        }
        return result;
    }
console.log(`6. factorial of ${givenNum} is`,facNum());


const pNum = 7;
function isPrime(){
    if(pNum<=1){
        return false
    } else if(pNum===2){
        return true;
    }
    for(i=2;i<=Math.sqrt(pNum);i++){
        if(pNum % i===0){
            return "7. given number is not prime false";
        }
    }
    return "7. given number is prime true"
}
console.log(isPrime())


const nestedArray = [1, [3, 5, [7, 8], 4], 10, [2, [11, [15]]]];
    const flatArry = nestedArray.flat(Infinity);
    const maxNum= Math.max(...flatArry);
console.log(`9. max num from arry is`, maxNum)


const str3 = "my name is vivek pathak";
const titleCase = str3.split(' ').map((word)=>{
   return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');
console.log(`10. titlecase of given string is`,titleCase)


const st1 = "listen";
const st2 = "silent";
function isAnagram(st1,st2){
    return st1.split("").sort().join("") === st2.split("").sort().join("");
}
console.log(`11. Given string anagram is`, isAnagram(st1,st2))


const numbers3 = [1, 2, 3, 1, 2, 4, 5, 6, 4];
function uniFun(arr){
    const uniqueNum = [];
    for(let i=0; i<arr.length;i++){
        if(!uniqueNum.includes(arr[i])){
            uniqueNum.push(arr[i])
        }
    }
    return uniqueNum;
}
console.log(`12. unique num of array is`, uniFun(numbers3));


const numbers4 = [1, 2, 3, 4, 5,10];
const sumArr = numbers4.reduce((acc, cur)=>{
    return acc = acc+cur;
})
console.log(`13. sum of array is`,sumArr);


let str1 = [1,1,2,3,4,3,2,5];
let countNum = [];
for (let item of str1){
    if(!countNum[item]){
        countNum[item] =1
    }else{
        countNum[item] = countNum[item]+1;
    }
}
console.log(`14. here number of count is`,countNum)


const str4 = "Hello world this is JavaScript";
console.log(`15. reverse order is`, str4.split(' ').reverse().join(' '));


const num2 = [8,9,6,7,4,5,1,2,3]
const sortNum = num2.sort()
console.log(`16. second small num is`, sortNum[1]);
console.log(`17. largest num of array is`,sortNum.slice(-1));


const num = [2, 4, 6, 8, 10];
const addSum2 = num.reduce((acc, cur)=>{
   return acc = acc+cur;
})
console.log(`18. avarage value of sum`, addSum2/num.length);


const str5 = "befdca";
const sortAlph = str5.split('').sort().join('');
console.log(`19. sorted string alpha order`, sortAlph);


const str6 = ["banana", "apple", "grape", "kiwi"];
const sortAlph2 = str6.sort();
console.log(`20. sorted apla araay`,sortAlph2)


const val = [0, 1, false, "", null, 2, undefined, 3]
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
console.log(`21. removed falsy val`,removeFalsyValues(val));


const primes = [3, 5, 7, 11];
const double = primes.map((x)=>{
    return x*2;
})
console.log(`22. double of array num` , double);


for(i=3;i<200;i++){
    if(i%3===0){
        // console.log(i)
    }
}


const num4 = [10, 20, 30, 40, 50];
const speInd=(arr, ele)=>{
    for(i=0; i<arr.length;i++){
        if(arr[i]===ele){
            return i;
        }
    }
    return -1;
}
console.log(`23. find index of specific num is`, speInd(num4, 50))


var str7 = 3232.43;
lastnum = str7.toString().charAt( str7.length - 1 );
console.log( lastnum );