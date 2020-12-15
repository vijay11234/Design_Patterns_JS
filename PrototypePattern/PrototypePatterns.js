let vehicalProttype = {
    init: function( carModel ){
        this.model = carModel
    },
    getModel : function() {
        console.log("This model is" + this.model)
        
    }
}

function vehicle( model ) {
    function F(){};
    F.prototype = vehicalProttype;

    let f = new F();
        
    f.init( model );
    return f;
}

let car = vehicle("TOYOTA");
console.log( car.getModel())