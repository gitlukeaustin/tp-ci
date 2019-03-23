const Interval = require('./interval');

/**
 *      Test overlaps...done
 */
test('test interval 2-5 overlaps with interval 4-6', () => {
    expect((new Interval(2,5)).overlaps(new Interval(4,7))).toBe(true);
 }
);

test('test interval 4-6 overlaps with interval 2-5', () => {
    expect((new Interval(4,6)).overlaps(new Interval(2,5))).toBe(true);
 }
);

test('test interval 0-3 does not overlap with interval 12-16', () => {
    expect((new Interval(0,3)).overlaps(new Interval(12,16))).toBe(false);
 }
);

test('test interval 12-16 does not overlap with interval 0-3', () => {
    expect((new Interval(12,16)).overlaps(new Interval(0,3))).toBe(false);
 }
);

test('test interval 2-5 overlaps with interval 2-16', () => {
    expect((new Interval(2,5)).overlaps(new Interval(2,16))).toBe(true);
 }
);


test('test interval 2-16 overlaps with interval 2-5', () => {
    expect((new Interval(2,16)).overlaps(new Interval(2,5))).toBe(true);
 }
);

test('test interval 7-8 overlaps with interval 2-8', () => {
    expect((new Interval(7,8)).overlaps(new Interval(2,8))).toBe(true);
 }
);


test('test interval 2-8 overlaps with interval 7-8', () => {
    expect((new Interval(2,8)).overlaps(new Interval(7,8))).toBe(true);
 }
);

/**
 *      Test includes... done
 */

test('test 0-8 includes 2-4', () => {
    expect((new Interval(0,8)).includes(new Interval(2,4))).toBe(true);
 }
);

test('test 2-4 does not include 0-8', () => {
    expect((new Interval(2,4)).includes(new Interval(0,8))).toBe(false);
 }
);

test('test 2-4 does not include 6-8', () => {
    expect((new Interval(2,4)).includes(new Interval(6,8))).toBe(false);
 }
);

test('test 6-8 does not include 2-4', () => {
    expect((new Interval(6,8)).includes(new Interval(2,4))).toBe(false);
 }
);

test('test 4-8 does not include 6-9', () => {
    expect((new Interval(4,8)).includes(new Interval(6,9))).toBe(false);
 }
);

test('test 6-9 does not include 4-8', () => {
    expect((new Interval(6,9)).includes(new Interval(4,8))).toBe(false);
 }
);

test('test 10-20 includes 10-20', () => {
    expect((new Interval(10,20)).includes(new Interval(10,20))).toBe(true);
 }
);

/**
     * Retourne l'union de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */

/**
 *  Test de l'union ...done
 */
test('test that a union of 1-4 and 3-4 returns an array', () => {
    expect((new Interval(1,4)).union(new Interval(3,4))).toBeInstanceOf(Array);
 } 
);

test('test that a union of 3-4 and 1-4 returns an array', () => {
    expect((new Interval(3,4)).union(new Interval(1,4))).toBeInstanceOf(Array);
 } 
);

test('test that a union of 1-4 and 3-4 returns an array of length 1', () => {
    expect(
        ((new Interval(1,4)).union(new Interval(3,4))).length
        ).toEqual(1);
 } 
);

test('test that a union of 3-4 and 1-4 returns an array of length 1', () => {
    expect(
        ((new Interval(3,4)).union(new Interval(1,4))).length
        ).toEqual(1);
 } 
);

test('test that a union of 1-4 and 8-68 returns an array', () => {
    expect((new Interval(1,4)).union(new Interval(8,68))).toBeInstanceOf(Array);
 } 
);

test('test that a union of 8-68 and 1-4 returns an array', () => {
    expect((new Interval(8,68)).union(new Interval(1,4))).toBeInstanceOf(Array);
 } 
);

test('test that a union of 8-68 and 1-4 returns an array of length 2', () => {
    expect((new Interval(8,68)).union(new Interval(1,4))).toBeInstanceOf(Array);
 } 
);

test('test that the start value of the union of 1-6 and 3-9 is 1', () => {
    expect((new Interval(1,6)).union(new Interval(3,9))[0].start).toEqual(1);
 }
);

test('test that the end value of the union of 1-6 and 3-9 is 9', () => {
    expect((new Interval(1,6)).union(new Interval(3,9))[0].end).toEqual(9);
 }
);

test('test that the union of 1-6 and 8-9 contains the interval 8-9', () => {
    expect((new Interval(1,6)).union(new Interval(8,9))).toContainEqual(new Interval(8,9));
 }
);

/*
* test interval function
*/
  /**
     * Retourne l'intersection de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) =>                     ▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) => <tableau vide>
     *
     * @param {Interval} interval
     * @returns {Interval|null}
     */

test('test that the intersection of 1-6 and 4-9 equals the interval 4-6', () => {
    expect((new Interval(1,6)).intersection(new Interval(4,9))).toEqual(new Interval(4,6));
    }
);

test('test that the intersection of 4-9 and 1-6 equals the interval 4-6', () => {
    expect((new Interval(4,9)).intersection(new Interval(1,6))).toEqual(new Interval(4,6));
    }
);

test('test that the intersection of 1-6 and 4-9 returns an Interval', () => {
    expect((new Interval(1,6)).intersection(new Interval(4,9))).toBeInstanceOf(Interval);
    }
);

test('test that the intersection of 4-9 and 1-6 to be an interval', () => {
    expect((new Interval(4,9)).intersection(new Interval(1,6))).toBeInstanceOf(Interval);
    }
);

test('test that the intersection of 1-6 and 8-9 is null', () => {
    expect((new Interval(1,6)).intersection(new Interval(8,9))).toBe(null);
    }
);

test('test that the intersection of 8-9 and 1-6 is null', () => {
    expect((new Interval(8,9)).intersection(new Interval(1,6))).toBe(null);
    }
);

test('test that the intersection of 8-9 and 1-12 is 8-9', () => {
    expect((new Interval(8,9)).intersection(new Interval(1,12))).toEqual(new Interval(8,9));
    }
);

test('test that the intersection of 1-12 and 8-9 is 8-9', () => {
    expect((new Interval(1,12)).intersection(new Interval(8,9))).toEqual(new Interval(8,9));
    }
);

test('test that the intersection of 1-7 and 8-9 is null', () => {
    expect((new Interval(1,7)).intersection(new Interval(8,9))).toBe(null);
    }
);


/* test exclusion function

    
     * Retourne l'exclusion de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     ▒▒▒▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     

*/
test('test that an exclusion of 8-68 and 1-4 returns an array', () => {
    expect((new Interval(8,68)).exclusion(new Interval(1,4))).toBeInstanceOf(Array);
 } 
);

test('test that an exclusion of 8-68 and 1-4 returns an array of length 2', () => {
    expect(((new Interval(8,68)).exclusion(new Interval(1,4))).length).toEqual(2);
 } 
);

test('test that an exclusion of 1-4 and 3-4 returns an array', () => {
    expect((new Interval(1,4)).exclusion(new Interval(3,4))).toBeInstanceOf(Array);
 } 
);

test('test that an exclusion of 3-4 and 1-4 returns an array', () => {
    expect((new Interval(3,4)).exclusion(new Interval(1,4))).toBeInstanceOf(Array);
 } 
);

test('test that an exclusion of 1-4 and 3-4 returns an array of length 2', () => {
    expect(
        ((new Interval(1,4)).exclusion(new Interval(3,4))).length
        ).toEqual(2);
 } 
);

test('test that an exclusion of 3-4 and 1-4 returns an array of length 2', () => {
    expect(
        ((new Interval(3,4)).exclusion(new Interval(1,4))).length
        ).toEqual(2);
 } 
);

test('test that a exclusion of 1-4 and 8-68 returns an array', () => {
    expect((new Interval(1,4)).exclusion(new Interval(8,68))).toBeInstanceOf(Array);
 } 
);

test('test that a exclusion of 8-68 and 1-4 returns an array', () => {
    expect((new Interval(8,68)).exclusion(new Interval(1,4))).toBeInstanceOf(Array);
 } 
);


test('test that the start value of the exclusion of 1-6 and 3-9 is 1', () => {
    expect((new Interval(1,6)).exclusion(new Interval(3,9))[0].start).toEqual(1);
 }
);



test('test that the exclusion of 1-6 and 8-9 contains the interval 8-9', () => {
    expect((new Interval(1,6)).exclusion(new Interval(8,9))).toContainEqual(new Interval(8,9));
 }
);

test('test that the exclusion of 1-6 and 4-9 contains the interval 7-9', () => {
    expect((new Interval(1,6)).exclusion(new Interval(8,9))).toContainEqual(new Interval(8,9));
 }
);

test('test that the exclusion of 1-6 and 4-9 contains the interval 1-3', () => {
    expect((new Interval(1,6)).exclusion(new Interval(8,9))).toContainEqual(new Interval(1,4));
 }
);

test('test that the exclusion of 1-2 and 4-9 contains the interval 4-9', () => {
    expect((new Interval(1,6)).exclusion(new Interval(8,9))).toContainEqual(new Interval(1,4));
 }
);

