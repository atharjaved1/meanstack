# Reservation Project Crud 


## Route (Save User Record)
# localhost:5000/api/savereservation

{
	"name":"Haseeb Khan",
	"email":"haseeb@yopmail.com",
	"roomType":"Double",
	"arrivalDate":"06/06/2019",
	"departureDate":"06/06/2019",
	"numberOfguest":"1",
	"freePickup":"true",
	"flightNumber":"1",
	"specicalRequest":"Something different"

}


## Route (Get All User Record)
# localhost:5000/api/findeservationsAllRecords



## (Delete Selected User Record By ID)
# localhost:5000/api/deletereservation

{
	"id":"5d5d77c00b09cc1730675825"
}


## updateReservation Record
# localhost:5000/api/updateReservation

{
	"id":"5d5d795ac4d5171de4fe553b",
	
	"reservationContact":{
			"name": "Richard",
			"email": "richardfsdd@yopmail.com",
			"roomType": "Doible",
			"numberOfguest": 2,
			"freePickup": true,
			"flightNumber": "asd3s",
			"specicalRequest": "Something New"
	}
}