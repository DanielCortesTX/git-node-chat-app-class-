var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Daniel';
		var text = 'Get work done';
		var res = generateMessage(from, text);
		  expect(res.createdAt).toBeA('number');
		  expect(res.from).toBe(from);
		  expect(res.text).toEqual(text);
		  
	})
});