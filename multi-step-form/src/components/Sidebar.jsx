import { Box, Typography, Chip } from "@mui/material";
import bg from "../assets/images/bg-sidebar-desktop.svg";
import PropTypes from "prop-types";



function Sidebar({ currentStep, onStepChange }) {
    // Helper to determine if a step is before the current step
    const isPrevStep = (step) => step < currentStep;

    return (
        <Box
            sx={{
                backgroundImage: `url("${bg}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '280px',
                height: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                padding: '30px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
            }}
        >
            {[1, 2, 3, 4].map((step) => (
                <Box key={step} display="flex" alignItems="center" width="100%" mb={3}>
                    <Chip
                        label={step.toString()}
                        variant={currentStep === step ? "filled" : "outlined"}
                        color={currentStep === step ? "primary" : "default"}
                        sx={{
                            color: "white",
                            mr: 2,
                            cursor: isPrevStep(step) ? 'pointer' : 'default',
                            bgcolor: currentStep === step ? 'primary.main' : 'transparent',
                            width: 48,
                            height: 48,
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            opacity: isPrevStep(step) ? 1 : 0.7,
                        }}
                        clickable={isPrevStep(step)}
                        onClick={isPrevStep(step) ? () => onStepChange(step, true) : undefined}
                    />
                    <Box flexDirection={"column"} display="flex">
                        <Typography variant="h7" color="gray">{`STEP ${step}`}</Typography>
                        <Typography variant="h6">
                            {step === 1 && 'YOUR INFO'}
                            {step === 2 && 'SELECT PLAN'}
                            {step === 3 && 'ADD-ONS'}
                            {step === 4 && 'SUMMARY'}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box >
    );
}

Sidebar.propTypes = {
    currentStep: PropTypes.number.isRequired,
    onStepChange: PropTypes.func.isRequired,
};

export default Sidebar;