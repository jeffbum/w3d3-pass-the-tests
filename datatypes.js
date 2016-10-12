var moment = require('moment')

//string- dont need to specify it's a string: just use single quotes
var word = '      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     '
//console.log(word.length) //<-- property (a variable essentially)
//console.log(word.toUpperCase())//<-- method (a function essentially)
//console.log(word.toLowerCase())
//console.log(word.trim())//<--cuts spacing out from inputs by users.
// word = word.toUpperCase()
// word = word.trim()
// word = word.toLowerCase()
// word = word.toUpperCase().trim().toLowerCase()
var word = 'City of Indianapolis'
// word = word.repeat(10)
// word = 'Pizza is amazing!'.substr(-8,8) //character counting
// word = 'Pizza is amazing!'.slice(9,16) //uses index point
// word = word.split(',')
 var indianaIndexStart = word.indexOf('Indiana')
 var whatIsThisLetter = word.charAt(8)
 var isItIndianapolis = word.includes('Indianapolis')
 word = word.replace('Indianapolis', 'Seattle')
// console.log(word)

var phoneNumber = 'Phone Number 123-123-1234 888-888-8888'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)//after slashes, can put flags
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/ig, '[Redacted]')
// console.log(hasPhoneNumber)//what you'll use the most to get a single item back

//Number
var number = Number('1')
number = number + (number * 50) //typically the right side is always an expression
number++ //same thing as number = number + 1 (left side is shorthand version)

var counter = 0
function doSomething(){
    counter++
}
doSomething()
doSomething()
doSomething()
doSomething()
doSomething()

    // console.log(counter)

//Math
var price = 12.01
var priceRounded = Math.round(price)//round = rounds number based on normal math rules
var priceRounded = Math.ceil(price)//ceil = rounds up
var priceRounded = Math.floor(price)//floor = rounds down
// console.log(priceRounded)
// console.log(Math.PI)//Pi to 16 digits

var randomNumber = Math.round(Math.random() * 10)//creates random whole integer between 0 nd 10
// console.log(randomNumber)

var price = 12.045
var cents = String(price).split('.')[1].substr(0,2)
var dollars = String(price).split('.')[0]
price = dollars + '.' + cents
// console.log(price)


//date

var today = new Date()
// console.log(today)

var yesterday = moment().subtract(2400, 'seconds')
//console.log(yesterday.toString())//convert to a string so I can understand it
// console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))//convert to a string so I can understand it


//Objects

var pizza = Object()
var pie = {
    ingredients: 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzarella',
}
// console.log(pie)

//array <--anything can go into an array

var ingredients = ['meat', 'cheese', 'sauce', 'spices', 'crust',
    12,
    true,
    moment().format('MM/DD/YYYY'),
    {
        sausage: 'mystery'
    }
]//property = [value]
console.log(ingredients)

//random object literals
var boolean = Boolean(true) === true
var name = String('Tom')
var name2 = 'Tom'
// console.log(name === name2)
var number = Number('1') === 1 //these are the same thing
