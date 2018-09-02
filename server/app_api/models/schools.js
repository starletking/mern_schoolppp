const mongoose = require('mongoose');

const statisticSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    week: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    elect_eur: {
        type: String,
        required: true
    },
    elect_kwh: {
        type: String,
        required: true
    },
    heating_eur: {
        type: String,
        required: true
    },
    heating_kwh: {
        type: String,
        requried: true
    },
    water_eur: {
        type: String,
        required: true
    },
    water_litres: {
        type: String,
        required: true
    }
});

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    statistics:[statisticSchema] 
});

mongoose.model('School', schoolSchema);