/* PROBLEM STATEMENT::: 

Using JavaScript, convert the following array:

[ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]

to:    

"a < b OR (c == d AND e != f)"

Please make your response as elegant and legible as possible.
*/

const a = [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]

// "a < b OR (c == d AND e != f)"
//    a     <      b         OR   c            ==         d        AND        e          !==      f
// a[1][1] a[1][0] a[1][2] a[0] (a[2][1][1] a[2][1][0] a[2][1][2] a[2][0] a[2][2][1]  a[2][2][0] a[2][2][2])

function convert(a) {
    
    // flatten array
    let b = a.flat(2)

    // build result
    const result = `${b[2]} ${b[1]} ${b[3]} ${b[0]} (${b[6]} ${b[5]} ${b[7]} ${b[4]} ${b[9]} ${b[8]} ${b[10]})`

    return result
}

convert(a)

