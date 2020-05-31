const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusSchema = new Schema({
    companyName: {
        type: String
    },
    busType: {
        type: String
    },
    busNumber: {
        type: String
    },
    startCity: {
        type: String
    },
    destination: {
        type: String
    },
    totalSeats: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    }
}, {collection: "buses"})

const bus = mongoose.model('bus', BusSchema)

module.exports = bus;