import mongoose from "mongoose";

var mod = new mongoose.Schema({ 
    id:String,
    lat: Number,
    lang: Number
},{strict: true});

var bikeLocationsData = mongoose.model('bikeLocationsData', mod);

export default bikeLocationsData

