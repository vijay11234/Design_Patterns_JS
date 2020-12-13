/**************************************************
 * @purpose: Implementation of factory pattern program
 * @file: FactoryPatternBusinesslogic.js
 * 
 ***************************************************/

class MovieticketBooking{
    constructor() {}

    shows(){
        throw new Error("Methos 'shows()'sould be implemented.");
    }
}
class MorningShow extends MovieticketBooking{
    shows(){
        console.log("Morning show at 4AM to 7AM");
    }
}
class AfternoonShow extends MovieticketBooking{
    shows(){
        console.log("Afternoon show at 12:30PM to 3:30PM");
    }
}
class NightShow extends MovieticketBooking{
    shows(){
        console.log("Night show at 12:30PM to 3:30PM");
    }
}
module.exports = { MovieticketBooking, MorningShow, AfternoonShow, NightShow }