import React from 'react'
import { Button, Container, Typography, Card, CardContent } from '@mui/material';
import { FaFileAlt, FaEnvelopeOpenText, FaBriefcase, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.6)), url("https://modestochristian.org/wp-content/uploads/brizy/imgs/MC-employment-photo-555x370x31x0x493x370x1726089033.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white'
      }}>
        <Typography variant="h2" className="fw-bold mb-3">
          Build Your Resume Faster <br /> with <span style={{color:"orange", fontSize:"60px", fontWeight:"600"}}>RB</span>uilder
        </Typography>
        <Typography variant="h6" className="mb-4">
          Stand out in the job market with professional designs.
        </Typography>
        <Link to={"/resumegenerator"}><Button variant="contained" size="large" color="primary">Start Now</Button></Link>
      </div>

      {/* Tools Section */}
      <Container className="py-5">
        <Typography variant="h4" align="center" className="mb-5 fw-bold">
          What You Can Do
        </Typography>
        <div className="row text-center g-4">
          <div className="col-md-3">
            <Card className="h-100 shadow-sm border-0">
              <CardContent>
                <FaFileAlt size={40} className="text-primary mb-3" />
                <h5 className="fw-bold mb-2">Create Resumes</h5>
                <p>Generate resumes tailored for the job you want.</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="h-100 shadow-sm border-0">
              <CardContent>
                <FaEnvelopeOpenText size={40} className="text-success mb-3" />
                <h5 className="fw-bold mb-2">Write Cover Letters</h5>
                <p>Auto-generate engaging cover letters.</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="h-100 shadow-sm border-0">
              <CardContent>
                <FaBriefcase size={40} className="text-warning mb-3" />
                <h5 className="fw-bold mb-2">Find Jobs</h5>
                <p>Instantly discover jobs that fit your profile.</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="h-100 shadow-sm border-0">
              <CardContent>
                <FaClipboardList size={40} className="text-danger mb-3" />
                <h5 className="fw-bold mb-2">Track Applications</h5>
                <p>Keep track of all your applications in one place.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      {/* Showcase Section */}
      <div className="bg-light py-5">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Typography variant="h5" className="fw-bold mb-3">
                Stunning Resume Templates
              </Typography>
              <p>
                Choose from a variety of modern and professional templates.
                Designed by experts to grab attention and increase your chances of landing interviews.
              </p>
              <Button variant="outlined" color="primary">View Samples</Button>
            </div>
            <div className="col-md-6 text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR1CWIm0hyn3uCwftqooYSSPomvErmwD3_Q&s" className="img-fluid rounded shadow" alt="Resume preview" />
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <Container className="py-5">
        <Typography variant="h4" align="center" className="mb-5 fw-bold">
          What Users Say
        </Typography>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <Card className="h-100 border-0 shadow-sm">
              <CardContent>
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  className="rounded-circle mb-3"
                  width="80"
                  alt="User"
                />
                <p>
                  “This tool made resume creation incredibly simple. I landed 3 interviews in a week!”
                </p>
                <h6 className="fw-bold">John James</h6>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100 border-0 shadow-sm">
              <CardContent>
                <img
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  className="rounded-circle mb-3"
                  width="80"
                  alt="User"
                />
                <p>
                  “I created a standout resume within minutes. Love the templates!”
                </p>
                <h6 className="fw-bold">Johnson James</h6>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="h-100 border-0 shadow-sm">
              <CardContent>
                <img
                  src="https://randomuser.me/api/portraits/women/30.jpg"
                  className="rounded-circle mb-3"
                  width="80"
                  alt="User"
                />
                <p>
                  “A must-have tool for every job seeker. Highly recommended!”
                </p>
                <h6 className="fw-bold">Emily Thomas</h6>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default LandingPage