import React from 'react';
import './ResumeGenerator.css';
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div className="resume-section text-white text-center">
      <h2 className="fw-bold mb-5 pt-5">Create a job-winning Resume in minutes</h2>

      <div className="container">
        <div className="row justify-content-center g-4 mb-4">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className="resume-card p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="resume-icon text-primary">
                  <i className="bi bi-file-earmark-text-fill fs-1"></i>
                </div>
              </div>
                <span className="badge bg-danger fs-6 px-3 py-2">Step 1</span>

              <h5 className="fw-bold">Add your information</h5>
              <p className="text-muted small">
                Use smart sections with pre-written examples to fill quickly.
              </p>


            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div className="resume-card p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="resume-icon text-danger">
                  <i className="bi bi-download fs-1"></i>
                </div>
              </div>
                <span className="badge bg-success fs-6 px-3 py-2">Step 2</span>

              <h5 className="fw-bold">Download your Resume</h5>
              <p className="text-muted small">
                Export your resume as PDF and apply right away!
              </p>


            </div>
          </div>
        </div>

        <Link to={"/form"}><button className="btn btn-primary btn-custom shadow mt-3">Let's Start</button></Link>
      </div>
    </div>
  );
}

export default ResumeGenerator;
