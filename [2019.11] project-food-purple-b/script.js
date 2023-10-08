const apiKey = "93dfda349bc834d0a83157076ecca92f";

const cityId = 91; // Dublin

const cityDescription = "Dublin";
const cuisineId = 82; // Pzza
const cuisineDescription = "Pizza";
let numbers = 0
console.log(numbers)
let filteredCuisines = [];

let restoArray = [];

fetch(
	`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`,
	{ headers: { "user-key": apiKey } }
)
	.then(response => {
		return response.json();
	})
	.then(json => {
		restoArray = json.restaurants;

		displayUI(restoArray);

	})
	.catch(err => {
		return err;
	});
