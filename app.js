var sample = require("./sample.json")

function filterVenuesByCity(city) {
    // validate input
    if (typeof city !== "string" || city === null || city === "") {
        console.log("Please provide a valid city name.")
        return
    }

    var returnFilteredVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].city === city) {
            returnFilteredVenues[element] = sample[element]
        }
    })

    return returnFilteredVenues
}

function filterVenuesBySports(sports) {
    // validate input
    if (typeof sports !== "object" || sports === null) {
        console.log("Please provide a valid sport name.")
        return
    }

    for (var i = 0; i < sports.length; ++i) {
        if (typeof sports[i] !== "string" || sports[i] === null || sports[i] === "") {
            console.log("Please provide a valid sport name.")
            return
        }
    }

    var returnFilteredVenues = {}

    Object.keys(sample).forEach(element => {
        var sampleSports = sample[element].sports
        for (var i = 0; i < sports.length; ++i) {
            for (var j = 0; j < sampleSports.length; ++j) {
                if (sports[i] === sampleSports[j]) {
                    returnFilteredVenues[element] = sample[element]
                    break
                }
            }
        }
    })

    return returnFilteredVenues
}

function filterVenuesByBooking(category) {
    // validate input
    if (typeof category !== "number" || category === null) {
        console.log("Please provide a valid category.")
        return
    }

    var returnFilteredVenues = {}
    var bookableVenueCategory = 2

    if (category === bookableVenueCategory) {
        Object.keys(sample).forEach(element => {
            if (sample[element].category === bookableVenueCategory) {
                returnFilteredVenues[element] = sample[element]
            }
        })
    }

    return returnFilteredVenues
}

function filterVenuesByRating(avgRating) {
    // validate input
    if (typeof avgRating !== "number" || avgRating === null) {
        console.log("Please provide a valid rating.")
        return
    }

    var returnFilteredVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].avgRating === avgRating) {
            returnFilteredVenues[element] = sample[element]
        }
    })

    return returnFilteredVenues
}

function filterVenuesByAmenities(amenities) {
    // validate input
    if (typeof amenities !== "object" || amenities === null) {
        console.log("Please provide a valid amenity name.")
        return
    }

    for (var i = 0; i < amenities.length; ++i) {
        if (typeof amenities[i] !== "string" || amenities[i] === null || amenities[i] === "") {
            console.log("Please provide a valid amenity name.")
            return
        }
    }

    var returnFilteredVenues = {}

    Object.keys(sample).forEach(element => {
        var sampleAmenities = sample[element].amenities
        for (var i = 0; i < amenities.length; ++i) {
            for (var j = 0; j < sampleAmenities.length; ++j) {
                if (amenities[i] === sampleAmenities[j]) {
                    returnFilteredVenues[element] = sample[element]
                    break
                }
            }
        }
    })

    return returnFilteredVenues
}

function searchVenuesByName(match) {
    // validate input
    if (typeof match !== "string" || match === null || match === "") {
        console.log("Please provide a valid venue name.")
        return
    }

    var searchedVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].name === match) {
            searchedVenues[element] = sample[element]
        }
    })

    return searchedVenues
}

function searchVenuesByCity(match) {
    // validate input
    if (typeof match !== "string" || match === null || match === "") {
        console.log("Please provide a valid city name.")
        return
    }

    var searchedVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].city === match) {
            searchedVenues[element] = sample[element]
        }
    })

    return searchedVenues
}

function searchVenuesByArea(match) {
    // validate input
    if (typeof match !== "string" || match === null || match === "") {
        console.log("Please provide a valid area name.")
        return
    }

    var searchedVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].area === match) {
            searchedVenues[element] = sample[element]
        }
    })

    return searchedVenues
}

console.log(module.exports = [filterVenuesByRating])

// console.log(filterVenuesByCity("Cochin"))