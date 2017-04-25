const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
	it('should return Fizz', function() {
		const testers = [3, 6, 9, 12];
		testers.forEach(function(item) {
			const answer = fizzBuzzer(item);
			answer.should.equal('fizz');
		});
	});
	it('should return buzz', function() {
		const testers = [5, 10, 20, 25];
		testers.forEach(function(item) {
			const answer = fizzBuzzer(item);
			answer.should.equal('buzz');
		});
	});
	it('should return fizzbuzz', function() {
		const testers = [15, 30, 45, 60];
		testers.forEach(function(item) {
			const answer = fizzBuzzer(item);
			answer.should.equal('fizz-buzz');
		});
	});
	it('should return the number that was inputted', function() {
		const testers = [2, 4, 8, 11];
		testers.forEach(function(input) {
			fizzBuzzer(input).should.equal(input);
		})
	})
	it('should throw error if not a nuber', function() {
		const testers = ['foo', true, 'bang', '2'];
		testers.forEach(function(input) {
			(function() {
				fizzBuzzer(item);
			}).should.throw(Error);
		});
	});
});