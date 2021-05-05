import React from 'react'
import { Card, Button } from 'react-bootstrap'

function SingleRestaurant({restaurant}) {
  return (
  <Card key={restaurant.id} className="bg-dark text-white mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={restaurant.photoUrl} className='img-fluid'/>
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>{restaurant.address}</Card.Text>
      <Card.Text>{restaurant.cuisine}</Card.Text>
      <Card.Text>{restaurant.rating}</Card.Text>
      <Button variant="primary">It's grub time!</Button>
    </Card.Body>
  </Card>
  )
}

export default SingleRestaurant