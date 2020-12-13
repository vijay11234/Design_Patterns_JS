/**************************************************
 * @purpose: Implementation of factory pattern program
 * @file: FactoryPatternMain.js
 * 
 ***************************************************/

try{
    let MovieticketBooking = require('./FactoryPatternsBusinesslogic')
    new MovieticketBooking.MorningShow().shows();
    new MovieticketBooking.AfternoonShow().shows();
    new MovieticketBooking.NightShow().shows();
} catch (error){
    console.log(error)
}