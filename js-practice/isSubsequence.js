/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let counter = 0;
    if(s.length == 0)
        {
            return true;
        }
    for(var i = 0; i < s.length; i++)
        {
            if(t.includes(s.charAt(i)) == false)
                {
                    return false;
                }
            t = t.slice((t.indexOf(s.charAt(i)))+1,t.length);
            counter++;   
            if(counter == s.length)
                {
                    return true;
                }
        }
};