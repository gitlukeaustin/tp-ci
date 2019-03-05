const Interval = require('./interval');

/**
 *      Test overlaps
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
 *      Test includes
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
