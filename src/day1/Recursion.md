## Recursion

Recursions are functions that call them self

E.g :

function foo(n: number): number {
  //Base Case
  if(n === 1) {
    return 1
  }

  //Recursion
  return n + foo(n-1)
}

we can break it down to:

base case
pre...
recursion../
post...