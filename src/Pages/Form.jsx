import React, { useState } from 'react'
import StepperEditor from '../Components/StepperEditor'
import Preview from '../Components/Preview'

function Form() {

  const [resumeData, setResumeData] = useState({
    name: '',
    jobTitle: '',
    location: '',
    email: '',
    phoneNumber: '',
    github: '',
    linkedIn: '',
    portfolio: '',
    course: '',
    college: '',
    university: '',
    year: '',
    jobRole: '',
    company: '',
    companyLocation: '',
    duration: '',
    skills: [],
    summary: ''
  })
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <StepperEditor resumeData={resumeData} setResumeData={setResumeData} />
          </div>
          <div className="col-md-6">
            <Preview resumeData={resumeData} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Form