const Util = require('./math');

 test('test 5 is prime', () => {
    expect(Util.isPrime(5)).toBe(true);
 }
);

test('test 6 is not prime', () => {
    expect(Util.isPrime(6)).toBe(false);
    }
);

test('test -5 is not prime', () => {
    expect(Util.isPrime(-5)).not.toBe(true);
 }
);

test('test 0 is not prime', () => {
    expect(Util.isPrime(0)).toBe(false);
 }
);

test('test 1 is not prime', () => {
    expect(Util.isPrime(1)).toBe(false);
 }
);

        /**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 */
test('test sumPrime(6) is 2 + 3 + 5 = 10', () => {
    expect(Util.sumPrime(6)).toBe(10);
 }
);

test('test sumPrime(8) is 2 + 3 + 5 + 7 = 17', () => {
    expect(Util.sumPrime(8)).toBe(17);
 }
);

/*
* Cette méthode doit retourner un tableau de 1 à n tel que:
* - Pour les nombres multiples de 3, les remplacer par "Fizz"
* - Pour les nombres multiples de 5, les remplacer par "Buzz"
* - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
**/
test('test fizzBuzz(8)[5] is Fizz', () => {
    expect(Util.fizzBuzz(8)[5]).toBe('Fizz');
 }
);

test('test fizzBuzz(15)[14] is FizzBuzz', () => {
    expect(Util.fizzBuzz(15)[14]).toBe('FizzBuzz');
 }
);

test('test fizzBuzz(15)[9] is Buzz', () => {
    expect(Util.fizzBuzz(15)[9]).toBe('Buzz');
 }
);

test('test fizzBuzz(2)[5] is undefined', () => {
    expect(Util.fizzBuzz(2)[5]).toBe(undefined);
 }
);

/*
Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 */

test('test Util.cipher("Test Unitaire") is Uftu Vojubjsf', () => {
    expect(Util.cipher("Test Unitaire")).toBe('Uftu Vojubjsf');
 }
);

test('test Util.cipher("a A z Z") is Uftu b B a A', () => {
    expect(Util.cipher("a A z Z")).toBe('b B a A');
 }
);
