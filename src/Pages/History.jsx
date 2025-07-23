import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdDeleteOutline } from "react-icons/md";


function History() {
  return (
    <>
      <div className="container">
        <h1 className='text-center my-5'>Resume Downloaded History</h1>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Card style={{ width: '100%' }} className='shadow'>
              <MdDeleteOutline className='m-3 ms-auto' />
              <Card.Body>
                <Card.Title>Full Name</Card.Title>
                <span>Fullstack Developer</span>
                <Card.Title className='mt-2'>Course</Card.Title>
                <span>College | University | 2025</span>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default History