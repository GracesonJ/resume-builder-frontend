import React from 'react'
import StepperEditor from '../Components/StepperEditor'
import Preview from '../Components/Preview'

function Form() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <StepperEditor/>
          </div>
          <div className="col-6">
            <Preview/>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Form