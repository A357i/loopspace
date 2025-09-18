function generateSlug(str) {
  if (typeof str === 'string') {
    return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "").replace(/ +/g, " ")      // Remove all non-alphanumeric and non-space characters
    .replace(/\s+/g, ' ')                                   // Collapse multiple spaces into one
    .trim()                                                 // Remove trailing spaces
    .replace(/ /g, '%20');                                  // Replaces spaces with %20
  } else {
    console.error('Error: Input must be a string')
  return '';
  }
}

generateSlug('helloWorld')
generateSlug('hello world!')
generateSlug(' hello-world ')
generateSlug('hello  world')
generateSlug('  ?H^3-1*1]0! W[0%R#1]D  ')

