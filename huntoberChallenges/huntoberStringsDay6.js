/* PROBLEM STATEMENT:::  

https://blog.barbaralaw.me/huntober-2022-day-6

This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Thanks for all your help yesterday, you guys are cool cats! Today's challenge will have you removing decoy characters from a string.

Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

For example:


COPY

COPY

// For the string below and 4
"Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// remove decoy strings
"This is Halloween! This is Halloween!"

// For the string below and 5
"The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// remove decoy strings and preach 🙌
"The Bachelor is a terrible television show."
*/


// SOLUTION :::

// Function removes every n-th char from str
function deDecoy(str, n) {
    let a = str.split("");
    let res = [];
    for (let i = 0; i < a.length; i++) {
        if (n === 0) {
            return a.join("");
        }
        else if (i === 0) {
            res.push(a[i]);
        }
        else if (n !== 1 && i === 1) {
            res.push(a[i]);
        }
        else if (n !== 1 && (i + 1) % n === 0) {
            continue;
        }  
        else {
            res.push(a[i]);
        }
    }
    return res.join("");
}

console.log(deDecoy("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!",4))
console.log(deDecoy("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.",5))