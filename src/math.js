let Util = {};
Util.factorial = (n) => {

};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    if(n < 2){
        return false;
    }
    for(var i = 2; i < n ;i++){
        if((n % i) == 0){
            return false;
        }
    }
    return true;
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    var sum = 0;
    for(var i = 2; i <= n; i++){
        if(Util.isPrime(i)){
            sum = sum + i;
        }
    }
    return sum;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
    var arrgh = [];
    for(var i=1;i<=n;i++){
        arrgh.push(i);
    }
    for(var i = 1;i<=n;i++){
        var current = arrgh[i-1];
        if((current%3) == 0){
            if((current%5)==0){
                arrgh[i-1] = "FizzBuzz";
            }
            else{
                arrgh[i-1] = "Fizz";
            }
        }
        else if((current%5) == 0){
            arrgh[i-1] = "Buzz";
        }
    }
    return arrgh;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
    var newphrase = '';
    for(var i = 0; i<phrase.length; i++){
        var code = phrase.charCodeAt(i);
        if(code == 'Z'.charCodeAt(0)){
            code = 'A'.charCodeAt(0);
        }
        else if(code == 'z'.charCodeAt(0)){
            code = 'a'.charCodeAt(0);
        }
        else if((code < 'Z'.charCodeAt(0) && code >= 'A'.charCodeAt(0)) ||
        (code >= 'a'.charCodeAt(0) && code < 'z'.charCodeAt(0))){
            code = code+1;
        }
         
        newphrase += String.fromCharCode(code);
    }
    return newphrase;
};


module.exports = Util;

