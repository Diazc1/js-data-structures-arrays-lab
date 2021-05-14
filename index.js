// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"];

// destructivelyAppendDriver(name)
// 1) appends a driver to the end of the drivers array

function destructivelyAppendDriver (name) {
    drivers.push(name);
}


// destructivelyPrependDriver(name)
// 2) prepends a driver to the beginning of the drivers array

function destructivelyPrependDriver (name) {
    drivers.unshift(name);
}

// destructivelyRemoveLastDriver()
// 3) removes the last driver from the drivers array

function destructivelyRemoveLastDriver () {
    drivers.pop();
}

// destructivelyRemoveFirstDriver()
// 4) removes the First driver from the drivers array

function destructivelyRemoveFirstDriver () {
    drivers.shift();
}

// appendDriver(name)
// 5) appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged

function appendDriver (name) {
    return [...drivers, name];
}

// prependDriver(name)
// 6) prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged

function prependDriver (name) {
    return [name, ...drivers];
}

// removeLastDriver()
// 7) removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged

function removeFirstDriver () {
    return drivers.slice(1);
}

// removeFirstDriver()
// 8) removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged

function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
}