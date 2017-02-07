var names = require("./names.json");
var unique = require("unique-random-array");

const getRandom = unique(names);

module.exports = {
    all: names,
    random: random
};

function random(number) {
    if(number === undefined) {
        return getRandom();
    } else {
        const randomItems = [];
        
        for(let i = 0; i < number; i++) {
            randomItems.push(getRandom());
        }

        return randomItems;
    }
}