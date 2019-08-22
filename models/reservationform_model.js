var mongoose = require('mongoose');

const reservationform_model = mongoose.Schema({

    name:{
        type: String,
        require:true
    },

    email:{
        type: String,
        require: true,
        index:{unique:true}
    },

    roomType:{
        type: String,
        require: true
    },
    arrivalDate:{
          type: Date, 
          default: Date.now,
          timestamps: true
         
    },
    departureDate:{
        type: Date, 
        default: Date.now,
        timestamps: true
    }, 
    numberOfguest:{
        type: Number,
        require: true 
    },
    freePickup:{
        type: Boolean,
        require: true
    },
    flightNumber:{
        type: String,
        require: true
    },
    specicalRequest:{
        type: String,
        require: true 
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model('reservationform_model', reservationform_model);