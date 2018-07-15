const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'mike',
			room: 'Node Course'
		}, {
		    id: '2',
			name: 'Jen',
			room: 'React course'
		}, {
			id: '3',
			name: 'Julie',
			room: 'Node Course'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Daniel',
			room: 'The office fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '2';
		var newArray = users.removeUser(userId);

		expect(newArray.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var userId = '99';
		var newArray = users.removeUser(userId);

		expect(newArray).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		var userId = '99';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});

	it('should return names for node course', () => {
		var usersList = users.getUserList('Node Course');

		expect(usersList).toEqual(['mike', 'Julie']);
	});

	it('should return names for react course', () => {
		var usersList = users.getUserList('React course');

		expect(usersList).toEqual(['Jen']);
	});
});