import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Button ariant="warning">Warning</Button>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}
