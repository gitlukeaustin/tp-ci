const Interval = require('./interval');


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

test('test interval 2-5 does not overlap with interval 2-16', () => {
    expect((new Interval(2,5)).overlaps(new Interval(2,16))).toBe(false);
 }
);


test('test interval 2-16 does not overlap with interval 2-5', () => {
    expect((new Interval(2,16)).overlaps(new Interval(2,5))).toBe(false);
 }
);

test('test interval 7-8 does not overlap with interval 2-8', () => {
    expect((new Interval(7,8)).overlaps(new Interval(2,8))).toBe(false);
 }
);


test('test interval 2-8 does not overlap with interval 7-8', () => {
    expect((new Interval(2,8)).overlaps(new Interval(7,8))).toBe(false);
 }
);