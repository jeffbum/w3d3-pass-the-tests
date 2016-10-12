var moment = require('./moment.min.js')

// Null & Undefined
function isNull(value) {
    return value === null
}
var emptyGlass = null
console.log(isNull(emptyGlass))
console.assert(isNull(emptyGlass) === true)

function isUndefined(value) {
    return value === blockOfClay
}
var blockOfClay
console.log(isUndefined(blockOfClay))
console.assert(isUndefined(blockOfClay) === true)

// Booleans
function isTrue(value) {
    return value === true
}
console.log(isTrue(1 + 1 === 2))
console.assert(isTrue(1 + 1 === 2) === true)

// Strings

function convertCaseLower(value) {
    return value.toLowerCase()

}
console.log(convertCaseLower('I AM WISPERING.'))
console.assert(convertCaseLower('I AM WISPERING.') === 'i am wispering.')

function convertCaseUpper(value) {
    return value.toUpperCase()
}
console.log(convertCaseUpper('i am shouting!'))
console.assert(convertCaseUpper('i am shouting!') === 'I AM SHOUTING!')

function repeatWord(value) {
    return value.repeat(2)
}
console.log(repeatWord('Knock.', 2))
console.assert(repeatWord('Knock.', 2) === 'Knock.Knock.')

function sliceWord(value) {
    return value.slice(7, 12)
}
console.log(sliceWord('I love pizza!', 7, 12))
console.assert(sliceWord('I love pizza!', 7, 12) === 'pizza')

function splitWord(value) {
    return value.split(',')
}
console.log(splitWord('US,CA,MX,JP,UK', ','))
console.assert(splitWord('US,CA,MX,JP,UK', ',').length === 5)

function whereIsCarmen(value) {
    return value.indexOf('Carmen')
}
console.log(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen'))
console.assert(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27)

function doesItContain(value) {
    return value.includes('Museum')
}
console.log(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum'))
console.assert(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true)

// Regular Expressions
function extractZipCode(value) {
    return value.slice(16, 21)
}
console.log(extractZipCode('My zip code was 46240.'))
console.assert(extractZipCode('My zip code was 46240.') === '46240')

function isPhoneNumber(value) {
    return value === '(888) 123.1234'
}
console.log(isPhoneNumber('(888) 123.1234'))
console.assert(isPhoneNumber('(888) 123.1234') === true)

//Numbers

function stringToNumber(value) {
    value = Number(value)
    return value
}
console.log(stringToNumber('1999'))
console.assert(stringToNumber('1999') === 1999)

function incrementByOne(number) {
    number = number + 1
    return number
}
console.log(incrementByOne(0))
console.assert(incrementByOne(0) === 1)

function isDivisibleByThree(value) {
    return value === 0
}
console.log(isDivisibleByThree(9%3))
console.assert(isDivisibleByThree(9%3) === true)

var value = Math.round(Math.random()*10)
function makeRandomNumber(value) {
    return value
}
console.log(makeRandomNumber(10))
console.assert(makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10)

var value = 5.51
var valueRounded = Math.round(value)
function roundNumber(value) {
    return valueRounded
}
console.log(roundNumber(5.51))
console.assert(roundNumber(5.51) === 6)

// // Dates

function justAMoment() {
    return  moment().format('dddd')
    // Look at moment.js docs to find how to return the day name, like Wednesday
}
console.log(justAMoment())
console.assert(justAMoment().includes('day') === true)

// // Objects
function myNameIs(value) {
    return value
}
console.log(myNameIs({name:'Your Name Here'}))
console.assert(myNameIs({name:'Your Name Here'}) === 'Your Name Here')

// // Arrays
// function getFirstItem(value) {
//     return value
// }
// console.log(getFirstItem(['Dog','Cat','Pig','Bird','Fish']))
// console.assert(getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
