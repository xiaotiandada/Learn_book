function Word(){
  this.words = []
  this.addWord = addWord
  this.showWord = showWord
}

function addWord(word){
  this.words.push(word)
}

function showWord (){
  return this.words.join('')
}

var word = new Word()

word.addWord('a')
word.addWord('p')
word.addWord('p')

console.log( word.showWord() )