import React from "react"
import { Button } from 'semantic-ui-react'
import './Component.css'

const Choose = () => (
  <div className="choose">
    <h3 className="H3-title">Choose your favorite players !</h3>
    <Button.Group>
      <Button color='blue' className="backcourt-button">Backcourt</Button>
      <Button color='red' className="frontcourt-button">Frontcourt</Button>
    </Button.Group>

  </div>
)

export default Choose
