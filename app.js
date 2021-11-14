const sample = require("./sample.json")
const paginateCount = 5

function filterVenuesByCity(city) {
    // validate input
    if (typeof city !== "string" || city === null || city === "") {
        console.log("Please provide a valid city name.")
        return
    }

    var filteredVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].city === city) {
            filteredVenues[element] = sample[element]
        }
    })

    return paginate(filteredVenues, paginateCount)
}

function paginate(venues, size) {
    var arr = [], i = 1, paginatedArray = []

    Object.keys(venues).forEach(element => {
        arr.push(venues[element])
        i++
        if (arr.length === size) {
            i = 1
            arr = []
            paginatedArray.push(arr)
        }
    })

    return paginatedArray
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

    var filteredVenues = {}

    Object.keys(sample).forEach(element => {
        var sampleSports = sample[element].sports
        for (var i = 0; i < sports.length; ++i) {
            for (var j = 0; j < sampleSports.length; ++j) {
                if (sports[i] === sampleSports[j]) {
                    filteredVenues[element] = sample[element]
                    break
                }
            }
        }
    })

    return paginate(filteredVenues, paginateCount)
}

function filterVenuesByBooking(category) {
    // validate input
    if (typeof category !== "number" || category === null) {
        console.log("Please provide a valid category.")
        return
    }

    var filteredVenues = {}
    var bookableVenueCategory = 2

    if (category === bookableVenueCategory) {
        Object.keys(sample).forEach(element => {
            if (sample[element].category === bookableVenueCategory) {
                filteredVenues[element] = sample[element]
            }
        })
    }

    return paginate(filteredVenues, paginateCount)
}

function filterVenuesByRating(avgRating) {
    // validate input
    if (typeof avgRating !== "number" || avgRating === null) {
        console.log("Please provide a valid rating.")
        return
    }

    var filteredVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].avgRating === avgRating) {
            filteredVenues[element] = sample[element]
        }
    })

    return paginate(filteredVenues, paginateCount)
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

    var filteredVenues = {}

    Object.keys(sample).forEach(element => {
        var sampleAmenities = sample[element].amenities
        for (var i = 0; i < amenities.length; ++i) {
            for (var j = 0; j < sampleAmenities.length; ++j) {
                if (amenities[i] === sampleAmenities[j]) {
                    filteredVenues[element] = sample[element]
                    break
                }
            }
        }
    })

    return paginate(filteredVenues, paginateCount)
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

    return paginate(searchedVenues, paginateCount)
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

    return paginate(searchedVenues, paginateCount)
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

    return paginate(searchedVenues, paginateCount)
}

module.exports = {
    filterVenuesByCity, filterVenuesBySports, filterVenuesByBooking,
    filterVenuesByRating, filterVenuesByAmenities, searchVenuesByName, searchVenuesByCity,
    searchVenuesByArea
}
