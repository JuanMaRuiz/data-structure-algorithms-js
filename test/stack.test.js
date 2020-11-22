const { expect } = require('chai');
const Stack = require('../src/Stack.js')

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    describe('size', () => {
        it('should return the size of the stack', () => {
            expect(stack.size()).to.be.equal(0);
            stack.push(1);
            expect(stack.size()).to.be.equal(1);
            stack.push(1);
            expect(stack.size()).to.be.equal(2);
        });
    });
    describe('push method', () => {
        it('should be a function', () => {

            expect(stack.push).to.be.a('function');
        });
        it('should add the passed item at the end of the the stack', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.items[1]).to.be.equal(2);
        });
    });
    describe('pop method', () => {
        it('should removes the last element in the stack', () => {
            stack.push(1);
            stack.push(3);
            stack.pop();
            expect(stack.size()).to.be.equal(1);
        });
        it('should return the last element in the stack', () => {
            stack.push(1);
            stack.push(3);
            stack.pop();
            expect(stack.pop()).to.be.equal(1);
        });
    });
    describe('isEmpty', () => {
        it('should return TRUE if the stack is empty', () => {
            expect(stack.isEmpty()).to.be.true;
        })
        it('should return FALSE if the stack is NOT empty', () => {
            stack.push(9);
            expect(stack.isEmpty()).to.be.false;
        });
    });
    describe('peek', () => {
        it('should return the last element of the stack', () => {
            stack.push(1);
            expect(stack.peek()).to.be.equal(1);
        });
    })
});