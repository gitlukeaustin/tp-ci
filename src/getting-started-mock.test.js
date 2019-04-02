//import axios from '../node_modules/axios';
const axios = require('axios');

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

const mockCallback = jest.fn(x => 42 + x);

test('mock testing', () => {
  forEach([0, 1], mockCallback);
  
  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);
  
  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  
  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  
  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  const myMock = jest.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  console.log(myMock.mock.instances);
  // > [ <a>, <b> ]

  console.log(myMock());
  // > undefined
  
  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);
  
  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10, 'x', true, true

  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(filterTestFn);

  console.log(result);
  // > [11]
  console.log(filterTestFn.mock.calls);
  // > [ [11], [12] ]

  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
  // > true


});

// users.js

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

jest.mock('axios');

//st('should fetch users', () => {
//const users = [{name: 'Bob'}];
//const resp = {data: users};
//axios.get.mockResolvedValue(resp);
//
//// or you could use the following depending on your use case:
//// axios.get.mockImplementation(() => Promise.resolve(resp))
//
//return Users.all().then(resp => expect(resp.data).toEqual(users));
//
//
//// The mock function was called at least once
//expect(mockFunc).toBeCalled();
//// The mock function was called at least once
//expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
//
//// The mock function was called at least once with the specified args
//expect(mockFunc).toBeCalledWith(arg1, arg2);
//// The mock function was called at least once with the specified args
//expect(mockFunc.mock.calls).toContain([arg1, arg2]);
//
//// The last call to the mock function was called with the specified args
//expect(mockFunc).lastCalledWith(arg1, arg2);
//// The last call to the mock function was called with the specified args
//expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
//  arg1,
//  arg2,
//]);
//
//// All calls and the name of the mock is written as a snapshot
//expect(mockFunc).toMatchSnapshot();
//
//
//
//
//// The first arg of the last call to the mock function was `42`
//// (note that there is no sugar helper for this specific of an assertion)
//expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);
//
//// A snapshot will check that a mock was invoked the same number of times,
//// in the same order, with the same arguments. It will also assert on the name.
//expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
//expect(mockFunc.getMockName()).toBe('a mock name');
//;
//
//st('test mockImplementationsOnce', () => {
//const myMockFn = jest
//.fn()
//.mockImplementationOnce(cb => cb(null, true))
//.mockImplementationOnce(cb => cb(null, false));
//
//myMockFn((err, val) => console.log(val));
//// > true
//
//myMockFn((err, val) => console.log(val));
//// > false
//
//myMockFn2 = jest
//.fn(() => 'default')
//.mockImplementationOnce(() => 'first call')
//.mockImplementationOnce(() => 'second call')
//.mockName('add42');;
//
//console.log(myMockFn2(), myMockFn2(), myMockFn2(), myMockFn2());
//// > 'first call', 'second call', 'default', 'default'
//
//const myObj = {
//  myMethod: jest.fn().mockReturnThis(),
//};
//
//// is the same as
//
//const otherObj = {
//  myMethod: jest.fn(function() {
//    return this;
//  }),
//};
//});


//
//const BookRepository = require('./book.repository');
//const db = require('./db');
//
//const repository = new BookRepository(db);
//
//repository.save({book:{
//    id:10,
//    name:'name'
//  }}
//);
//
//describe('Book repo save', function(){
//  test('sv a book',()=>{
//    const dbMock = {
//      get:jest.fn(),
//      push:jest.fn(),
//      write:jest.fn()
//    };
//    dbMock.get.mockReturnValue(dbMock);
//    dbMock.push.mockReturnValue(dbMock);
//
//      const repository = new BookRepository(dbMock);
//      repository.save({book:{id:1,name:"Unit Test"}});
//
//      expect(dbMock.write.mock.calls.length).toBe(1);
//  })
//})