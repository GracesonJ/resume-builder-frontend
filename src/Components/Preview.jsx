import React from 'react';
import { GrDocumentDownload } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeTemplate() {
  return (
    <div className="container my-5">
      {/* Action Buttons */}
      <div className="d-flex justify-content-end gap-2 mb-4">
        <button className="btn btn-outline-primary"><GrDocumentDownload /></button>
        <button className="btn btn-outline-secondary"><FaHistory /></button>
        <Link to="/" className="btn btn-outline-dark">Back</Link>
      </div>

      {/* Resume Content */}
      <div className="mx-auto p-4 border rounded" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div className="text-center mb-3">
          <h3 className="mb-1">Graceson J</h3>
          <h6 className="text-primary">MERN Stack Developer</h6>
        </div>

        {/* Contact Info */}
        <div className="mb-4 text-center small">
          <div>7894561230 | graceson@gmail.com | Kakkanad</div>
        </div>

        {/* Links */}
        <div className="mb-4 text-center small">
          <a href="https://github.com/janesmith" target="_blank" rel="noreferrer" className="me-2">GitHub</a>
          <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noreferrer" className="me-2">LinkedIn</a>
          <a href="https://janesmith.dev" target="_blank" rel="noreferrer">Portfolio</a>
        </div>

        {/* Summary */}
        <h5 className="border-bottom pb-2">Summary</h5>
        <p className="small">
          Full-stack developer passionate about building modern web applications. Experienced in MERN stack and Agile development.
        </p>

        {/* Education */}
        <h5 className="border-bottom pb-2 mt-4">Education</h5>
        <p className="mb-0"><strong>B.Sc. in Computer Science</strong></p>
        <p className="small text-muted">SRM UNIVERSITY — 2025</p>

        {/* Experience */}
        <h5 className="border-bottom pb-2 mt-4">Professional Experience</h5>
        <p className="mb-0"><strong>Software Engineer - CodeWave Inc.</strong></p>
        <p className="small text-muted">Kakkanad | 8 Months</p>

        {/* Skills */}
        <h5 className="border-bottom pb-2 mt-4">Skills</h5>
        <div className="d-flex flex-wrap gap-2 mt-2">
          <span className="badge bg-primary">React</span>
          <span className="badge bg-primary">Node.js</span>
          <span className="badge bg-primary">MongoDB</span>
          <span className="badge bg-primary">JavaScript</span>
          <span className="badge bg-primary">HTML</span>
          <span className="badge bg-primary">CSS</span>
          <span className="badge bg-primary">Git</span>
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplate;
