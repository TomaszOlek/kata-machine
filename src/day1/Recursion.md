## Recursion

Recurtions are funtions that call them self

E.g :

function foo(n: number): number {
  //Base Case
  if(n === 1) {
    return 1
  }

  //Recursion
  return n + foo(n-1)
}

It can be broke down to:

pre..
precusion..
post...