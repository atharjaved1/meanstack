const express = require('express');
var router = express.Router();
const reservation_form = require('../controllers/reservationform_controllers'); 

//save reservation details
router.post('/savereservation',reservation_form.savereservationDetails);

//find reservation
router.get('/findeservation',reservation_form.findreservation);

// delete reservation
router.delete('/deletereservation', reservation_form.deleteReservation);
 
// update reservation
router.put('/updateReservation', reservation_form.updateReservation);






module.exports = router; 