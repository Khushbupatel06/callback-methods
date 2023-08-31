// ============================
// REDUCE METHOD
// ============================

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for(let price of prices) {
    total += price
}
console.log(total)

const total = prices.reduce((total, price) => {
    return total + price
})
const minPrice = prices.reduce((min, price) => {
    if(price < min) {
        return price;
    }
    return min;
})
const maxPrice = prices.reduce((max, price) => {
    if(price > max) {
        return price;
    }
    return max;
})

                //IMPLICIT RETURN

const total = prices.reduce((total, price) => total + price)

const movies = [
        {
            title: 'Amadeus',
            score: 99,
            year: 1984
        },
        {
            title: 'Stand By Me',
            score: 85,
            year: 2013
        },
        {
            title: 'Parasite',
            score: 95,
            year: 2019
        },
        {
            title: 'Alien',
            score: 90,
            year: 1986
        },
        {
            title:'Waterworld',
            score:62,
            year: 1995
        },
        {
            title:'Jingle All The Way',
            score: 71,
            year: 1996
        },
        {
            title:'Notting Hill',
            score: 77,
            year: 1999
        },
        {
            title: '13 Going On 30',
            score: 70,
            year: 1979
        }
    ]

const highestRated = movies.reduce((bestMovie, currentMovie) => {
    if(currentMovie.score > bestMovie.score){
        return currentMovie;
    }
    return bestMovie;
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) IT WILL PRINT 20
evens.reduce((sum, num) => sum + num, 50) IT WILL PRINT 50+20 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             THIS & ARROW FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const person = {
    firstName: 'Steve',
    lastName: 'Hall',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }, 
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}