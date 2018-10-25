function foo() {
  return'development'===process.env.NODE_ENV&&'foo'
}

console.log(foo())
