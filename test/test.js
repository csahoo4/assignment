const test = require("../app/app.js")
const assert = require('assert');

function test_filterVenuesByCity() {
    assert(test.filterVenuesByCity("Bangalore")[0].length === 5)
}

function test_filterVenuesByCity() {
    assert(test.filterVenuesByCity("Bangalore")[0].length === 5)
}

test1()