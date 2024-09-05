// Connect to the socket
let socket = io();

// Listen for 'number' events from the server
socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
});

document.getElementById('cuisineSelect').addEventListener('change', async function() {
    const cuisineType = this.value;
    const restaurantList = document.getElementById('restaurantList');

    if (cuisineType) {
        try {
            // Fetch restaurants from server
            const response = await fetch(`http://localhost:3000/restaurants/${encodeURIComponent(cuisineType)}`);
            const restaurants = await response.json();

            // Clear the previous list
            restaurantList.innerHTML = '';

            if (restaurants.length > 0) {
                const ul = document.createElement('ul');
                restaurants.forEach(restaurant => {
                    const li = document.createElement('li');
                    li.textContent = restaurant.name; // Assuming your MongoDB has a 'name' field for restaurants
                    ul.appendChild(li);
                });
                restaurantList.appendChild(ul);
            } else {
                restaurantList.innerHTML = 'No restaurants found for this cuisine.';
            }
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    } else {
        restaurantList.innerHTML = ''; // Clear list if no cuisine selected
    }
});
