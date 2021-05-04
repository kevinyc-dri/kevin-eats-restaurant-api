import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [allRestaurants, setAllRestaurants] = useState()
  const [text, setText] = useState('text should render here')

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(promise => setAllRestaurants(promise))
      .catch(err => console.log(err))
  }, [])

  function handleSubmit(event) {
    console.log(allRestaurants)
    event.preventDefault();

    const newRestaurant = {
      name: {text},
      address: 'her house',
      rating: 6,
    }

    fetch('https://bocacode-intranet-api.web.app/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    }).then(response => response.json())
    .then(status => console.log(status))
    }

  return (
    <div className="App">
      <form action="">
        <label htmlFor="">
          <input
            type="text"
            onChange={event => setText(event.target.value)}
            value={text} />
        </label>
        <button onClick={event => handleSubmit(event)}>go here</button>
      </form>
      <span>{text}</span>

      {!allRestaurants ? <p>Loading...</p> : allRestaurants.map(restaurant => {
        return (
          <div className="App" key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <span>{restaurant.address}</span>
            <span>{restaurant.cuisine}</span>
            <span>{restaurant.rating}</span>
            <img
              alt={`The awesome ${restaurant.name}`}
              src={restaurant.photoUrl}
              style={{ maxWidth: '300px', padding: '12px' }}
            />
          </div>
        )
      })}

    </div>
  );
}

export default App;
