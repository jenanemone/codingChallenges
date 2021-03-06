/* Andre tutoring session #7 : Rube Golberg a Palindrome with a Stack 
    
Warning: frivolity ahead!

    Task: Implement a stack from the class Stack to check if a string is a palindrome. Don't touch the Stack class!
*/

class Queue {
  constructor() {
    this.array = [];
  }
  
  push(email) {
    this.array.push(email);
  }
  
  pop() {
    return this.array.shift();
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  
  push(item) {
    this.array.push(item);
  }
  
  pop() {
    return this.array.pop();
  }
}


// anna
// => same forwards and backwards

/* 
 *  top
 *  ____
 * 
 *  n
 *  a
 *  ______
 *  bottom
 */
function isPalindrome(str) {
	const stack = new Stack();
  const halfWayIndex = Math.floor(str.length / 2); // 4 / 2 = 2
  for(let i = 0; i < halfWayIndex; i++) {
    const letter = str[i]; // n
    stack.push(letter);
  }
  for(let j = halfWayIndex; j < str.length; j++) {
    const letter = str[j];
    if(letter !== stack.pop()) {
      return false;
    }
  }
  return true;
}











