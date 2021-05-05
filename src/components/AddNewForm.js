import React, { useState } from 'react'
import {Button, Form, Col} from 'react-bootstrap'

function AddNewForm() {
  const [newRestaurant, setNewRestaurant] = useState({})

  function handleSubmit(event) {
    event.preventDefault()

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
    <>
      {/* <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Row>
      </Form> */}

      <Form action="">
        <label>
          Restaurant Name:
          <Form.Control
            type="text"
            name="name"
            onChange={event => setNewRestaurant({ ...newRestaurant, name: event.target.value })}
          // value={name} 
          />
        </label>
        <br />
        <label>
          Address:
          <Form.Control
            type="text"
            name="name"
            onChange={event => setNewRestaurant({ ...newRestaurant, address: event.target.value })}
          // value={address} 
          />
        </label>
        <br />
        <label>
          Rating:
          <Form.Control
            type="text"
            name="name"
            onChange={event => setNewRestaurant({ ...newRestaurant, rating: event.target.value })}
          // value={rating} 
          />
        </label>
        <br />
        <label>
          Photo:
          <Form.Control
            type="text"
            name="photoUrl"
            onChange={event => setNewRestaurant({ ...newRestaurant, photoUrl: event.target.value })}
          // value={photoUrl} 
          />
        </label>
        <br />
        <Button onClick={event => handleSubmit(event)}>Create Restaurant</Button>
      </Form>
    </>
  )
}

export default AddNewForm