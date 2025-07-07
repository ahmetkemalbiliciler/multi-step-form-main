import { Box, Typography, Chip } from "@mui/material";
import bgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
import PropTypes from "prop-types";



function Sidebar({ currentStep, onStepChange }) {
    const isPrevStep = (step) => step < currentStep;

    return (
        <Box
            sx={{
                backgroundImage: {
                    xs: `url("${bgMobile}")`,
                    md: `url("${bgDesktop}")`
                },
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: { xs: '100vw', md: '280px' },
                height: { xs: '180px', md: '600px' },
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: 'center',
                color: 'white',
                padding: { xs: '20px 0 0 0', md: '30px' },
                boxShadow: { xs: 'none', md: '0 4px 8px rgba(0, 0, 0, 0.1)' },
                borderRadius: { xs: '0 0 12px 12px', md: '8px' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: { xs: 2, md: 0 },
            }}
        >
            {[1, 2, 3, 4].map((step) => (
                <Box key={step} display="flex" alignItems="center" width={{ xs: 'auto', md: '100%' }} mb={{ xs: 0, md: 3 }} mr={{ xs: 2, md: 0 }}>
                    <Chip
                        label={step.toString()}
                        variant={currentStep === step ? "filled" : "outlined"}
                        color={currentStep === step ? "primary" : "default"}
                        sx={{
                            color: "white",
                            mr: { xs: 0, md: 2 },
                            cursor: isPrevStep(step) ? 'pointer' : 'default',
                            bgcolor: currentStep === step ? 'primary.main' : 'transparent',
                            width: 40,
                            height: 40,
                            fontSize: '1rem',
                            fontWeight: 700,
                            opacity: isPrevStep(step) ? 1 : 0.7,
                        }}
                        clickable={isPrevStep(step)}
                        onClick={isPrevStep(step) ? () => onStepChange(step, true) : undefined}
                    />
                    <Box flexDirection={"column"} display={{ xs: 'none', md: 'flex' }}>
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