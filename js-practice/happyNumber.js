/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let counter = 0;
    if (n == 1) {
        return true;
    }
    while (n != 1) {
        var temp;
        let sum = 0;
        for (let i = 0; i < n.toString().length; i++) {
            temp = n.toString()[i];
            sum += temp * temp;
        }
        if (sum == 1) {
            return true;
        }
        else {
            counter++;
            n = sum;
        }
        if (counter == 20) {
            return false;
        }
    }
    
};