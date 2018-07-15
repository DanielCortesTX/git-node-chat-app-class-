const expect = require('expect');

const {isRealString} = require('./validation')

//import isReal String

// is real string
  // should reject non string values
  // should reject strings with only spaces
  // should allow string with non-space characters

  describe('isRealString', () => {
  	it('should reject non string values', () => {
  		var res = isRealString(98);

  		expect(res).toBe(false);
  	});
  	it('should reject strings with only spaces', () => {
  		var nonString = '    ';
  		var failString = isRealString(nonString);

  		expect(failString).toBe(false);
  	});
  	it('should allow string with non-space characters', () => {
  		var goodString = '   Daniel';
  		var failString = isRealString(goodString);

  		expect(failString).toBe(true);
  	});
  });