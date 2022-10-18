/* PROBLEM STATEMENT:::  Huntober 2022 Strings Day 7

https://blog.barbaralaw.me/huntober-2022-day-7

Oooh, yeah! Here it is, the final function you'll need in your string-decoding arsenal this week. Today's challenge might not be too trying after all the others, but you never know!

Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

Examples:

'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase

'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// function replaces letters with opposites
'Example: 0 number or punctuation changes'

Do me a favor and try to solve it a couple of different ways to see which you preferred and why.

🧩 Put it all Together
Finally! We have every function needed to decode the gobbledygook I shared a week ago! Some of you already figured it out yesterday (bravo!), but let's pretend you didn't.

Please use the daily functions, in order, to decode the week's secret message. Then, when you feel good about your result, go ahead and tweet the string with no explanation and #huntober2022, you earned it.

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

Two things to note:

It's very important that the functions are called in the order they were given (e.g. Day 1 first, Day 7 last), as any deviation could throw things far out of whack
Day 2 and Day 5 weren't designed to be part of this overall decoder. The answers you got on those days should be used as inputs for Days 3 & 6 respectively.

Please feel free to share your answers at each step, your code, feelings about the challenges, etc. as you please! I only ask that any spoilers have a little warning in case anyone wants to come in fresh later.

I'm torn on if I should share my code or not, as I went mostly brute force with this and the code is that of the baddie that I am. Let me know in the comments what you think I should do.

If you really want to go wild, see if you can reverse engineer an encoding sequence. A solution that fits any given string, key characters, and decoy sequence might not be as easy as it appears...

*/

function alphaSwap(s) {

    let res = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let cCode = s.charCodeAt(i);
        let dist;
        if (cCode <= 90 && cCode >= 78) {
            dist = 90 - cCode;
            char = String.fromCharCode(97 + dist);
        }
        else if (cCode <= 77 && cCode >= 65) {
            dist = cCode - 65;
            char = String.fromCharCode(122 - dist);
        }
        else if (cCode >= 97 && cCode <= 109) {
            dist = 109 - cCode;
            char = String.fromCharCode(90 - dist);
        }
        else if (cCode >= 110 && cCode <= 122) {
            dist = 122 - cCode;
            char = String.fromCharCode(65 + dist);
        }
        res += char;
    }
    return res;
}

console.log(alphaSwap('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'))


/* Putting it all together... */

// day 1
const dict = {"0" : "O", "1" : "I", "2" : "Z", "3" : "E", "4" : "h", "5" : "S", "6" : "G", "7" : "L", "8" : "B", "9" : "q"};
const keys = Object.keys(dict);
const values = Object.values(dict);

function fixChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char in keys) {
            str[i] = dict[char];
        }
        else if (char in values) {
            str[i] = keys.find(key => dict[key] == char);
        }
    }
    return str;
}

// Day 2

function detangle(s) {
    // find first ind of c
    // slice from that first ind + 1
    let c = s.indexOf("c");
    s = s.slice(c + 1);
    
    // find Eek! and remove it
    // have a temp variable to build substrings
    // loop through and build and find temp, remove
    let tail = "";
    let a = s.split("");
    for (let i = 0; i < a.length; i++) {
        if (a[i] == "E" && a[i + 1] == "e" && a[i + 2] == "k" && a[i + 3] == "!") {
            tail = a.slice(i + 4)
            a = a.slice(0, i).concat(tail);
            i -= 4;
        }
    }

    //console.log(a.join(""))
    // reverse it
    s = a.reverse().join("")
    //console.log(s)

    
    // split up on lowercase 'v'
    s = s.split("v");
    // => Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task.

    //remove instructions
    s = s.slice(1)

    // take first letter
    let task = ""
    s.forEach(word => task += word[0])
    
    return task
}

// DAY 3
function makeSpaces(str) {
    return str.replace(/[A_KEY!]/g, " ");
}

// DAY 4
function reverseString(str) {
    return str.split("").reverse().join("");
}


const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

function decryptMsg(encryptedMsg) {
    encryptedMsg = fixChars(encryptedMsg);
    encryptedMsg = detangle(encryptedMsg);
    encryptedMsg = makeSpaces(encryptedMsg);
    encryptedMsg = reverseString(encryptedMsg);
    return encryptedMsg;
}

console.log(decryptMsg(encryptedMsg));