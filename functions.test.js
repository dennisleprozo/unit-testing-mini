const { returnTwo, greeting, add, multiply } = require('./functions');

describe('returnTwo() should return 2.', () => {
   test("returnTwo should be defined.", () => {
   expect( returnTwo ).toBeDefined();
   });
   test('returnTwo should return 2', () => {
      expect(returnTwo()).toBe(2)
   });
});


describe('greeting should return greeting and name. ', () => {
   test('greeting should return passedd in name. ', () => {
      expect( greeting('James')).toBe('Hello, James.');
      expect( greeting('Jill')).toBe('Hello, Jill.');
   });
});

describe('add function should return sum of two numbers. ', () => {
   test('add should return total. ', () => {
      expect( add( 1, 2 ) ).toBe(3);
      expect( add( 3, -2 ) ).toEqual(1);
      expect( add( 0.1, 0.2 ) ).toBe(0.3);

   });
});

describe('multiply function should return sum of two numbers. ', () => {
   test('multiply should return total. ', () => {
      expect( multiply( 1, 2 ) ).toBe(2);
      expect( multiply( 3, 2 ) ).toEqual(6);
   });
});

