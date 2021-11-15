const sample = require("../sample.json")
const paginateCount = 5

/** 
 * Filters out Venues by City
 * @param {String} city - The city which should be filtered out
 * @return {Array} - Filtered out veneues with pagination
*/
function filterVenuesByCity(city) {
    // validate input
    if (typeof city !== "string" || city === null || city === "") {
        return "Please provide a valid city name."
    }

    var filteredVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].city === city) {
            filteredVenues[element] = sample[element]
        }
    })

    return paginate(filteredVenues, paginateCount)
}


/** 
 * Paginate the venues with 5 venues per array
 * @param {JSON} venues - Filtered out Venues
 * @param {number} size - Paginate Count
 * @return {Array} - Paginated array
*/
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

/** 
 * Filters out Venues by Sports
 * @param {Array<String>} sports - The sports which should be filtered out
 * @return {Array} - Filtered out veneues with pagination
*/
function filterVenuesBySports(sports) {
    // validate input
    if (typeof sports !== "object" || sports === null) {
        return "Please provide a valid sport name."
    }

    for (var i = 0; i < sports.length; ++i) {
        if (typeof sports[i] !== "string" || sports[i] === null || sports[i] === "") {
            return "Please provide a valid sport name."
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

/** 
 * Filters out Venues by category
 * @param {number} category - The category which should be filtered out, category=2 for bookable venues
 * @return {Array} - Filtered out veneues with pagination
*/
function filterVenuesByBooking(category) {
    // validate input
    if (typeof category !== "number" || category === null) {
        return "Please provide a valid category."
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

/** 
 * Filters out Venues by Rating
 * @param {number} avgRating - The rating which should be filtered out
 * @return {Array} - Filtered out veneues with pagination
*/
function filterVenuesByRating(avgRating) {
    // validate input
    if (typeof avgRating !== "number" || avgRating === null) {
        return "Please provide a valid rating."
    }

    var filteredVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].avgRating === avgRating) {
            filteredVenues[element] = sample[element]
        }
    })

    return paginate(filteredVenues, paginateCount)
}

/** 
 * Filters out Venues by amenities
 * @param {Array<String>} amenities - The amenities which should be filtered out
 * @return {Array} - Filtered out veneues with pagination
*/
function filterVenuesByAmenities(amenities) {
    // validate input
    if (typeof amenities !== "object" || amenities === null) {
        return "Please provide a valid amenity name."
    }

    for (var i = 0; i < amenities.length; ++i) {
        if (typeof amenities[i] !== "string" || amenities[i] === null || amenities[i] === "") {
            return "Please provide a valid amenity name."
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

/** 
 * Search Venues by Name
 * @param {String} match - The name which should be searched
 * @return {Array} - Veneues that matches the Name with pagination
*/
function searchVenuesByName(match) {
    // validate input
    if (typeof match !== "string" || match === null || match === "") {
        return "Please provide a valid venue name."
    }

    var searchedVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].name === match) {
            searchedVenues[element] = sample[element]
        }
    })

    return paginate(searchedVenues, paginateCount)
}

/** 
 * Search Venues by City
 * @param {String} match - The city which should be searched
 * @return {Array} - Veneues that matches the City with pagination
*/
function searchVenuesByCity(match) {
    // validate input
    if (typeof match !== "string" || match === null || match === "") {
        return "Please provide a valid city name."
    }

    var searchedVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].city === match) {
            searchedVenues[element] = sample[element]
        }
    })

    return paginate(searchedVenues, paginateCount)
}

/** 
 * Search Venues by Area
 * @param {String} match - The area which should be searched
 * @return {Array} - Veneues that matches the Area with pagination
*/
function searchVenuesByArea(match) {
    // validate input
    if (typeof match !== "string" || match === null || match === "") {
        return "Please provide a valid area name."
    }

    var searchedVenues = {}

    Object.keys(sample).forEach(element => {
        if (sample[element].area === match) {
            searchedVenues[element] = sample[element]
        }
    })

    return paginate(searchedVenues, paginateCount)
}

/** 
 * Sorts Venues by Rating in increasing order
 * @return {Array} - Sorted Veneues by Rating
*/
function sortByRating() {
    var venues = []

    Object.keys(sample).forEach(element => {
        venues.push(sample[element])
    });

    venues.sort((a, b) => { return a.avgRating - b.avgRating })
    return venues
}

/** 
 * Sorts Venues by Most Rated in descending order
 * @return {Array} - Sorted Veneues by Most Rated
*/
function sortByMostRated() {
    var venues = []

    Object.keys(sample).forEach(element => {
        venues.push(sample[element])
    });

    venues.sort((a, b) => { return b.ratingCount - a.ratingCount })
    return venues
}

module.exports = {
    filterVenuesByCity, filterVenuesBySports, filterVenuesByBooking,
    filterVenuesByRating, filterVenuesByAmenities, searchVenuesByName, searchVenuesByCity,
    searchVenuesByArea, sortByRating, sortByMostRated
}
