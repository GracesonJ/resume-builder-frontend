import React, { useState } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    TextField,
    Stack,
    Grid,
} from '@mui/material';
import { addResumeAPI } from '../service/allApi';

const steps = [
    'Basic Information',
    'Contact Details',
    'Education Details',
    'Work Experience',
    'Skills & Certifications',
    'Review & Submit',
];

function StepperEditor({ resumeData, setResumeData }) {
    const [activeStep, setActiveStep] = useState(0);
    const [inputSkill, setInputSkill] = useState('');

    const suggestions = ['React', 'Angular', 'NodeJS', 'Express', 'MongoDB', 'Git', 'HTML', 'CSS', 'Bootstrap', 'Tailwind'];
    const { skills } = resumeData;

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);
    const handleReset = () => setActiveStep(0);

    const addSkill = (skill) => {
        if (!skill.trim()) return;
        if (skills.includes(skill)) {
            alert("Skill already exists.");
        } else {
            setResumeData({
                ...resumeData,
                skills: [...resumeData.skills, skill]
            });
            setInputSkill('');
        }
    };

    const handleRemoveSkill = (removeSkill) => {
        setResumeData({ ...resumeData, skills: skills.filter(item => item !== removeSkill) });
    };

    const handleAddResume = async () => {
        try {
            const result = await addResumeAPI(resumeData);
            if (result.status >= 200 && result.status < 300) {
                alert(" Resume Added Successfully!");
                handleReset(); // optional reset
                setResumeData({
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
            } else {
                alert("Something went wrong.");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Server error. Please try again.");
        }
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Personal Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField label="Full Name" variant="standard" fullWidth value={resumeData.name} onChange={e => setResumeData({ ...resumeData, name: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Job Title" variant="standard" fullWidth value={resumeData.jobTitle} onChange={e => setResumeData({ ...resumeData, jobTitle: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Location" variant="standard" fullWidth value={resumeData.location} onChange={e => setResumeData({ ...resumeData, location: e.target.value })} /></Grid>
                        </Grid>
                    </>
                );
            case 1:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Contact Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField label="Email" variant="standard" fullWidth value={resumeData.email} onChange={e => setResumeData({ ...resumeData, email: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Phone Number" variant="standard" fullWidth value={resumeData.phoneNumber} onChange={e => setResumeData({ ...resumeData, phoneNumber: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Github Profile" variant="standard" fullWidth value={resumeData.github} onChange={e => setResumeData({ ...resumeData, github: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="LinkedIn Profile" variant="standard" fullWidth value={resumeData.linkedIn} onChange={e => setResumeData({ ...resumeData, linkedIn: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Portfolio Link" variant="standard" fullWidth value={resumeData.portfolio} onChange={e => setResumeData({ ...resumeData, portfolio: e.target.value })} /></Grid>
                        </Grid>
                    </>
                );
            case 2:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Education Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField label="Course Name" variant="standard" fullWidth value={resumeData.course} onChange={e => setResumeData({ ...resumeData, course: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="College Name" variant="standard" fullWidth value={resumeData.college} onChange={e => setResumeData({ ...resumeData, college: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="University" variant="standard" fullWidth value={resumeData.university} onChange={e => setResumeData({ ...resumeData, university: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Year of Passout" variant="standard" fullWidth value={resumeData.year} onChange={e => setResumeData({ ...resumeData, year: e.target.value })} /></Grid>
                        </Grid>
                    </>
                );
            case 3:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Work Experience</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField label="Job / Internship" variant="standard" fullWidth value={resumeData.jobRole} onChange={e => setResumeData({ ...resumeData, jobRole: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Company Name" variant="standard" fullWidth value={resumeData.company} onChange={e => setResumeData({ ...resumeData, company: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Location" variant="standard" fullWidth value={resumeData.companyLocation} onChange={e => setResumeData({ ...resumeData, companyLocation: e.target.value })} /></Grid>
                            <Grid item xs={12}><TextField label="Duration" variant="standard" fullWidth value={resumeData.duration} onChange={e => setResumeData({ ...resumeData, duration: e.target.value })} /></Grid>
                        </Grid>
                    </>
                );
            case 4:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Skills</Typography>
                        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                            <TextField label="Add Skill" variant="standard" fullWidth value={inputSkill} onChange={e => setInputSkill(e.target.value)} />
                            <Button variant="text" onClick={() => addSkill(inputSkill)}>Add</Button>
                        </Stack>
                        <Typography variant="subtitle1">Suggestions:</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                            {suggestions.map((item, i) => (
                                <button key={i} onClick={() => addSkill(item)} className="btn btn-outline-primary mb-2">{item}</button>
                            ))}
                        </Stack>
                        <Typography variant="subtitle1">Added Skills:</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {skills.length > 0 ? skills.map((item, i) => (
                                <span key={i} className="btn btn-secondary me-2 my-1">
                                    {item} <button onClick={() => handleRemoveSkill(item)} className="btn-close btn-close-white ms-2" aria-label="Remove"></button>
                                </span>
                            )) : <span className="text-danger">No Skills Added Yet</span>}
                        </Stack>
                    </>
                );
            case 5:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Professional Summary</Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Write a short summary of yourself"
                            variant="standard"
                            value={resumeData.summary}
                            onChange={e => setResumeData({ ...resumeData, summary: e.target.value })}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10">
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Box sx={{ p: 4 }}>
                            {activeStep === steps.length ? (
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                    <Button variant="contained" color="success" onClick={handleAddResume}>
                                        Submit Resume
                                    </Button>
                                </Box>
                            ) : (
                                <>
                                    {renderStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                                        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                                        <Button variant="contained" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </Box>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    );
}

export default StepperEditor;
