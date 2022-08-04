/* PROBLEM STATEMENT::: Leetcode 937. Reorder Data in Log Files
You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
Example 2:

Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 

Constraints:

1 <= logs.length <= 100
3 <= logs[i].length <= 100
All the tokens of logs[i] are separated by a single space.
logs[i] is guaranteed to have an identifier and at least one word after the identifier.
*/

// SOLUTION:::

/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    const res = [];
    
    // start with adding letter logs only to final array
    for (i=0; i<logs.length; i++) {
        let curr = logs[i].split(' ');
        // places the letter logs only into new array
        if (isNaN(Number(curr[1]))) res.push(logs[i]);
    }
    
    // Now, sort the resulting array of letter-only logs
    res.sort((a,b) => {
        let firLog = a.split(' ');
        let secLog = b.split(' ');
        console.log(`first, second: `,firLog,secLog)
        let firWord = firLog.slice(1).join(' ');
        let secWord = secLog.slice(1).join(' ');
        console.log(`firWord,secWord: `,firWord,secWord)
        
        // sort 
        if (firWord > secWord) return 1;
        else if (firWord < secWord) return -1;
        else {
            if (firLog[0] >= secLog[0]) return 1;
            else return -1;
        }
        
    })
    console.log(`line 33 res: `,res)
    // add the digit logs (see description item 3)
    for (i=0; i<logs.length; i++) {
        let curr = logs[i].split(' ');
        if (!isNaN(Number(curr[1]))) res.push(logs[i]);
    }
    
    return res;
};








// Poornima's below:



var reorderLogFiles = function(logs) {
    const letters = [];
    const digits = [];

    logs.forEach(log => {
        if(log.split(" ")[1].charAt(0) < 'a') {
            digits.push(log);
        } else {
            letters.push(log);
        }
    });


    letters.sort((a, b) => {
        const aArr = a.split(" ");
        const bArr = b.split(" ");
        // console.log(aArr, bArr);
        const aArrLen = aArr.length;
        const bArrLen = bArr.length;
        
        for(let i = 1; i < Math.min(aArrLen, bArrLen); i++) {
            // console.log(aArr[i] < bArr[i]);
            if(aArr[i] !== bArr[i]) {
                if(aArr[i] < bArr[i]) {
                    return -1;
                } else if(aArr[i] > bArr[i]) {
                    return 1;
                } else {
                    return 0;
                }                    
            }
        }

        if(aArr[0] < bArr[0]) {
            return -1;
        } else if(aArr[0] > bArr[0]) {
            return 1;
        } else {
            return 0;
        }
    })

    return [...letters, ...digits];
};

//Pseudocode
/* Create two lists that will store the Letter and Digit Lists.
Iterate through each element in the array and check if the second element is a letter or digit and add it to their respective lists.
Sort the Letter Lists.
Sort the digit Lists.
Merge two Lists.
Return the Merged List. */

const logs = ["dig1 8 1 5 1",
                "let1 art can",
                "dig2 3 6",
                "let2 own kit dig",
                "let3 art zero"];

const logs1 = ["a1 9 2 3 1",
                "g1 act car",
                "zo4 4 7",
                "ab1 off key dog",
                "a8 act zoo"];

const logs2 = ["a1 9 2 3 1",
                "g1 act car",
                "zo4 4 7",
                "ab1 off key dog",
                "a8 act zoo",
                "a2 act car"];

const logs3 = ["dig1 8 1 5 1",
                "let1 art zero can",
                "dig2 3 6",
                "let2 own kit dig",
                "let3 art zero"];

// console.log(reorderLogFiles(logs));
// console.log(reorderLogFiles(logs1));
// console.log(reorderLogFiles(logs2));
console.log(reorderLogFiles(logs3));