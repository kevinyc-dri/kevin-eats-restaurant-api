import { useEffect, useState } from 'react'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import AddNewForm from './components/AddNewForm';
import SingleRestaurant from './components/SingleRestaurant'

function App() {
  const [allRestaurants, setAllRestaurants] = useState()

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(promise => setAllRestaurants(promise))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <div className="App">
        <AddNewForm />
        <div className='App-card-container' style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '100%', margin: '3rem 0' }}>
          {!allRestaurants ? <p>Loading...</p> : allRestaurants.map(restaurant => {
            return (
              <SingleRestaurant restaurant={restaurant} areWeCool={true} />
            )
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
