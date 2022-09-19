import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = props => {
  return (
    <Form className="d-flex  flex-row">
    <Form.Control
      type='text'
      name='q'
      placeholder='Search'
      className='mr-sm-2 ml-sm-5 me-2'
    ></Form.Control>
    <Button type='submit' variant='outline-success' className='p-2'>
      Search
    </Button>
  </Form>
  )
}


export default SearchBox;