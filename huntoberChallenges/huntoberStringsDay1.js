/* PROBLEM STATEMENT::: Huntober String Challenge Day 1

https://blog.barbaralaw.me/huntober-2022-day-1

This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


COPY

COPY
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
As an example, here is how a string looks before and after the characters are fixed:


"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
Please create a function that will fix a given string of this mistake before incalculable damage can be done!

*/

// SOLUTION:::

// This solution uses a dictionary and searches its keys and values

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

// This solution uses JavaScript's loose typing to take advantage of position

const dict1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const dict2 = ["O", "I", "Z", "E", "h", "S", "G", "L", "B", "q"];

const charSwap = (str) => {
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char in dict1) {
            s[i] = dict2[+char];
        }
        else if (char in dict2) {
            s[i] = dict2.indexOf(char);
        }
    }
    return str;
}


/* SAMPLE TESTS:::

*/
console.log(fixChars("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."));
console.log(fixChars("PRO-TIP #498: IT'S NICE TO SAY HELLO."));
