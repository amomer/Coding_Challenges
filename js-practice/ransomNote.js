/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let counter = 0;
    for(let i = 0; i<ransomNote.length; i++) {
        if(magazine.includes(ransomNote.charAt(i)) == true) {
            magazine = magazine.replace(ransomNote.charAt(i)," ");
            counter++
        }
        else
            break;
    }
    if(counter == ransomNote.length)
        return true;
    return false;
};