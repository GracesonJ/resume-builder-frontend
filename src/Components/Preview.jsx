import React from 'react';
import { GrDocumentDownload } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Edit from './Edit';

function Preview({ resumeData }) {
  const { skills } = resumeData;

  return (
    <div className="container my-5 px-3 px-md-5" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Action Buttons */}
      <div className="d-flex flex-wrap justify-content-end gap-2 mb-4">
        <button className="btn btn-outline-primary"><GrDocumentDownload /></button>
        <Edit />
        <Link to={'/history'}>
          <button className="btn btn-outline-secondary"><FaHistory /></button>
        </Link>
        <Link to={'/'} className="btn btn-outline-dark">Back</Link>
      </div>

      {/* Resume Content */}
      <div className="mx-auto p-5 border rounded shadow-sm bg-white" style={{ maxWidth: "850px", lineHeight: 1.6 }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="mb-1 text-uppercase fw-bold">{resumeData?.name}</h2>
          <h5 className="text-primary fw-semibold">{resumeData?.jobTitle}</h5>
        </div>

        {/* Contact Info */}
        <div className="mb-3 text-center small fw-medium">
          <div>{resumeData?.phoneNumber} | {resumeData?.email} | {resumeData?.location}</div>
        </div>

        {/* Links */}
        <div className="mb-4 text-center small">
          {resumeData?.github && <a href={resumeData.github} target="_blank" rel="noreferrer" className="me-3 text-decoration-none">GitHub</a>}
          {resumeData?.linkedIn && <a href={resumeData.linkedIn} target="_blank" rel="noreferrer" className="me-3 text-decoration-none">LinkedIn</a>}
          {resumeData?.portfolio && <a href={resumeData.portfolio} target="_blank" rel="noreferrer" className="text-decoration-none">Portfolio</a>}
        </div>

        {/* Summary */}
        <h5 className="border-bottom pb-2 mt-4 text-uppercase fw-bold">Professional Summary</h5>
        <p className="small text-break">{resumeData?.summary}</p>

        {/* Education */}
        <h5 className="border-bottom pb-2 mt-4 text-uppercase fw-bold">Education</h5>
        <p className="mb-0 fw-bold">{resumeData?.course}</p>
        <p className="mb-0">{resumeData?.college}</p>
        <p className="text-muted small mb-0">{resumeData?.university}</p>
        <p className="text-muted small">{resumeData?.year}</p>

        {/* Experience */}
        <h5 className="border-bottom pb-2 mt-4 text-uppercase fw-bold">Work Experience</h5>
        <p className="mb-0 fw-bold">{resumeData?.jobRole}</p>
        <p className="mb-0">{resumeData?.company}</p>
        <p className="text-muted small">{resumeData?.companyLocation} | {resumeData?.duration}</p>

        {/* Skills */}
        <h5 className="border-bottom pb-2 mt-4 text-uppercase fw-bold">Technical Skills</h5>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {skills?.length > 0 ? (
            skills.map((item, i) => (
              <span key={i} className="badge bg-secondary text-light px-3 py-2 text-uppercase fw-medium">{item}</span>
            ))
          ) : (
            <p className="text-muted small">No skills added.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
