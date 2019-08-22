const  form_model = require('../models/reservationform_model');


// Save record

const savereservationDetails = (req, res, next) =>{

    let newreservation = new form_model();

    newreservation.name = req.body.name;
    newreservation.email = req.body.email;
    newreservation.roomType = req.body.roomType;
    newreservation.arrivalDate = req.body.arrivalDate;
    newreservation.departureDate = req.body.departureDate;
    newreservation.numberOfguest = req.body.numberOfguest;
    newreservation.freePickup = req.body.freePickup;
    newreservation.flightNumber = req.body.flightNumber;
    newreservation.specicalRequest = req.body.specicalRequest;

    newreservation.save((err,contact) => {
        if(err){
            res.send(err);
        }
        else{
            res.status(200).json({
                message:"data save successfully",
                contact
            })
        }
    }) 
        
}

// Find Reservation  
const findreservation = (req, res, next) =>{
    form_model.find((err,getallreservation)=>{
        if(err){
            res.send(err);
        }
        else{
            res.status(200).json({
                message:"Get all contacts",
                getallreservation
            })
        }
    })
}

// delete record
const deleteReservation = (req, res, next) =>{
    form_model.findByIdAndRemove(req.body.id, (err,deleteonerecord)=>{
        if(err){
            res.send(err);
        }
        res.status(200).json({
            message: "Successfully delete one record",
            deleteonerecord
        })
    })
}
 // hello
// update record
const updateReservation = (req, res, next) =>{
    form_model.findByIdAndUpdate(req.body.id, req.body.reservationContact, {new:true}, (err, updaterecordhere)=>{
        if(err){
            res.send(err);
        }
        res.status(200).json({
            message: "Successfully update record",
            updaterecordhere
        })
    })
}
const test = (req, res)=>{
    //hello
}
module.exports = {
    savereservationDetails,
    findreservation,
    deleteReservation,
    updateReservation
}