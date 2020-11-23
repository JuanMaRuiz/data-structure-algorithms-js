class Set {
    constructor() {
        this.collection = [];
    }

    // This method add a new element from the set.
    add (item) {
        if ( this.has(item) ) {
            return false;
        }
        this.collection.push(item);
    }

    // This method will check the presence of an element and return `true` of `false`.
    has (item) {
        return this.collection.indexOf(item) !== -1;
    }

    // This method will return all the values in the set.
    values () {
        return this.collection;
    }

    // This method removes an element from the set.
    remove () {}

    // This method will return the size of the collection.
    size () {
        return this.collection.length;
    }

    // This method will return the union of to sets.
    union () {}

    // This method will return the intersection of two sets in a new set.
    intersection () {}

    //  This method will return the difference of two sets in a new set.
    difference () {}

    // This method will test if the set is a subset of a difference set.
    subset () {}

}

module.exports = Set;