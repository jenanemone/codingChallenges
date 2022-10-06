/* PROBLEM STATEMENT::: Huntober String Challenge Day 4

https://blog.barbaralaw.me/huntober-2022-day-4

This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Today's challenge is minor to give you all a bit of a break halfway through the challenge week, but there are a couple of side quests I'm going to throw out for those with extra time on their hands.

So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:


"   The white space at the beginning of this string doesn't match the whitespace at the end. "
// reverse it
" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

*/

// SOLUTION:::

let str = "   The white space at the beginning of this string doesn't match the whitespace at the end. "
function reverseString(str) {
    return str.split("").reverse().join("");
}

// test it out
console.log(reverseString(str));