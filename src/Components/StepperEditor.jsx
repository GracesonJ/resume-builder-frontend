import React from 'react';
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
    Chip,
} from '@mui/material';

const steps = [
    'Basic Information',
    'Contact Details',
    'Education Details',
    'Work Experience',
    'Skills & Certifications',
    'Review & Submit',
];

function StepperEditor() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);
    const handleReset = () => setActiveStep(0);

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Personal Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField fullWidth label="Full Name" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Job Title" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Location" variant="standard" /></Grid>
                        </Grid>
                    </>
                );
            case 1:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Contact Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField fullWidth label="Email" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Phone Number" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Github Profile" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="LinkedIn Profile" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Portfolio Link" variant="standard" /></Grid>
                        </Grid>
                    </>
                );
            case 2:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Education Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField fullWidth label="Course Name" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="College Name" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="University" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Year of Passout" variant="standard" /></Grid>
                        </Grid>
                    </>
                );
            case 3:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Work Experience</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}><TextField fullWidth label="Job / Internship" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Company Name" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Location" variant="standard" /></Grid>
                            <Grid item xs={12}><TextField fullWidth label="Duration" variant="standard" /></Grid>
                        </Grid>
                    </>
                );
            case 4:
                return (
                    <>
                        <Typography variant="h6" gutterBottom>Skills</Typography>

                        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                            <TextField fullWidth label="Add Skill" variant="standard" />
                            <Button variant="text">Add</Button>
                        </Stack>

                        <Typography variant="subtitle1" gutterBottom>Suggestions:</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                            <Chip variant="outlined" label="HTML" />
                        </Stack>

                        <Typography variant="subtitle1" gutterBottom>Added Skills:</Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip
                                color="primary"
                                label="HTML"
                                onDelete={() => { }}
                            />
                            <Chip
                                color="primary"
                                label="CSS"
                                onDelete={() => { }}
                            />
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
                            defaultValue="Eg: I'm a passionate full-stack developer..."
                            variant="standard"
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
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
    
                <Box sx={{ p: 4 }}>
                    {activeStep === steps.length ? (
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed — you're ready to submit!
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                <Button variant="contained" color="success" onClick={handleReset}>
                                    Submit
                                </Button>
                            </Box>
                        </>
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
                <div className="col-md-1"></div>
            </div>
            
        </div>
    );
}

export default StepperEditor;
