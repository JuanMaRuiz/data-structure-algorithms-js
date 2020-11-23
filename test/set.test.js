const { expect } = require('chai');
const Set = require('../src/Set.js')

describe('Set', () => {
    let set;

    beforeEach(() => {
        set = new Set();
    });

    describe('add method', () => {
        it('should add an element into the set', () => {
            set.add(1);
            expect(set.collection[0]).to.be.equal(1);
        });
        it('should return false if the element to add to Set is already present in the collection', () => {
            set.add(1);
            expect(set.add(1)).to.be.false;
        });
    });

    describe('size method', () => {
        it('should return the size of the set', () => {
            set.add(1);
            set.add(null);
            set.add(false);
            expect(set.size()).to.be.equal(3);
        });
    });
    describe('values method', () => {
        it('should be a function');
        it('should add the passed item at the end of the the stack');
    });
    describe('remove method', () => {
        it('should return TRUE if the stack is empty')
        it('should return FALSE if the stack is NOT empty');
    });
    describe('union method', () => {
        it('should return the last element of the stack');
    });
    describe('intersection method', () => {
        it('should return the last element of the stack');
    });
    describe('difference method', () => {
        it('should return the last element of the stack');
    });
    describe('subset method', () => {
        it('should return the last element of the stack');
    });
});