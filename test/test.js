const test = require("../app/app.js")
const assert = require('assert');
// const arr = [filterVenuesByCity, filterVenuesBySports, filterVenuesByBooking,
//     filterVenuesByRating, filterVenuesByAmenities, searchVenuesByName, searchVenuesByCity,
//     searchVenuesByArea]

function test_filterVenuesByCity() {
    assert(test.filterVenuesByCity("Bangalore")[0].length === 5)
}

function test2_filterVenuesByCity() {
    assert(typeof test.filterVenuesByCity("Bangalore") === "object")
}

function test_filterVenuesBySports() {
    var sports = ""
    assert(test.filterVenuesBySports(sports) === "Please provide a valid sport name.")
}

function test2_filterVenuesBySports() {
    var sports = ["SP1", "SP2"]
    assert(typeof test.filterVenuesBySports(sports) === "object")
}

function test_filterVenuesByBooking() {
    var category = 4
    assert(test.filterVenuesByBooking(category).length === 0)
}

function test2_filterVenuesByBooking() {
    var category = 2
    assert(test.filterVenuesByBooking(category).length > 0)
}

function test_filterVenuesByRating() {
    var avgRating = 5
    assert(test.filterVenuesByRating(avgRating).length > 0)
}

function test2_filterVenuesByRating() {
    var avgRating = null
    assert(test.filterVenuesByRating(avgRating) === "Please provide a valid rating.")
}

function test_filterVenuesByAmenities() {
    var amenities = ""
    assert(test.filterVenuesByAmenities(amenities) === "Please provide a valid amenity name.")
}

function test2_filterVenuesByAmenities() {
    var amenities = ["DLF"]
    assert(test.filterVenuesByAmenities(amenities).length === 0)
}

function test_searchVenuesByName() {
    var match = ""
    assert(test.searchVenuesByName(match) === "Please provide a valid venue name.")
}

function test_searchVenuesByCity() {
    var match = ""
    assert(test.searchVenuesByCity(match) === "Please provide a valid city name.")
}

function test_searchVenuesByArea() {
    var match = ""
    assert(test.searchVenuesByArea(match) === "Please provide a valid area name.")
}

test_filterVenuesByCity()
test2_filterVenuesByCity()
test_filterVenuesBySports()
test2_filterVenuesBySports()
test_filterVenuesByBooking()
test2_filterVenuesByBooking()
test_filterVenuesByRating()
test2_filterVenuesByRating()
test_filterVenuesByAmenities()
test2_filterVenuesByAmenities()
test_searchVenuesByName()
test_searchVenuesByCity()
test_searchVenuesByArea()
