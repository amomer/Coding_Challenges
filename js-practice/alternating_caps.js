const myMethod = (words) =>{
    var word = words.toLowerCase().split("");
    for(let i = 0; i < word.length ; i+=2){
        word[i] = word[i].toUpperCase();
    }
    return word.join("");
}
console.log(myMethod("hI"));