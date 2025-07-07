import { useState } from 'react';
import { FormContainer, FlexContainer, StyledButton, pageTitleStyle, pageSubtitleStyle } from '../styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';

const plans = [
    {
        key: 'arcade',
        label: 'Arcade',
        price: { monthly: 9, yearly: 90 },
        icon: arcadeIcon,
        color: '#FFAF7E',
    },
    {
        key: 'advanced',
        label: 'Advanced',
        price: { monthly: 12, yearly: 120 },
        icon: advancedIcon,
        color: '#F9818E',
    },
    {
        key: 'pro',
        label: 'Pro',
        price: { monthly: 15, yearly: 150 },
        icon: proIcon,
        color: '#483EFF',
    },
];

function PlanPage() {
    const { plan, setPlan, billing, setBilling, setAddons } = useForm();
    const navigate = useNavigate();

    const handlePlanSelect = (key) => {
        setPlan(key);
        setAddons([]); 
    };

    const handleBillingToggle = () => {
        setBilling(billing === 'monthly' ? 'yearly' : 'monthly');
        setAddons([]); 
    };

    return (
        <FormContainer>
            <Typography variant="h4" sx={pageTitleStyle}>Select your plan</Typography>
            <Typography sx={pageSubtitleStyle}>You have the option of monthly or yearly billing.</Typography>
            <FlexContainer sx={{ justifyContent: 'space-between', mt: 2 }}>
                {plans.map(planObj => (
                    <Box
                        key={planObj.key}
                        onClick={() => handlePlanSelect(planObj.key)}
                        sx={{
                            border: plan === planObj.key ? '2px solid #483EFF' : '1px solid #ccc',
                            borderRadius: 2,
                            p: 2,
                            minWidth: 140,
                            cursor: 'pointer',
                            backgroundColor: plan === planObj.key ? 'rgba(72,62,255,0.05)' : '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 2,
                            transition: 'border 0.2s, background 0.2s',
                        }}
                    >
                        <Box sx={{ mb: 1 }}>
                            <img src={planObj.icon} alt={planObj.label} width={40} height={40} style={{ background: planObj.color, borderRadius: '50%' }} />
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold">{planObj.label}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            ${planObj.price[billing]}/{billing === 'monthly' ? 'mo' : 'yr'}
                        </Typography>
                    </Box>
                ))}
            </FlexContainer>
            {/* Toggle Switch */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f8f9fe',
                borderRadius: 2,
                py: 1.5,
                mt: 2,
                gap: 2,
            }}>
                <Typography fontWeight={billing === 'monthly' ? 'bold' : 'normal'} color={billing === 'monthly' ? 'primary' : 'text.secondary'}>
                    Monthly
                </Typography>
                <Box
                    onClick={handleBillingToggle}
                    sx={{
                        width: 40,
                        height: 22,
                        borderRadius: 11,
                        background: billing === 'monthly' ? '#483EFF' : '#ccc',
                        mx: 1,
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'background 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            background: '#fff',
                            position: 'absolute',
                            left: billing === 'monthly' ? 2 : 20,
                            top: 2,
                            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                            transition: 'left 0.2s',
                        }}
                    />
                </Box>
                <Typography fontWeight={billing === 'yearly' ? 'bold' : 'normal'} color={billing === 'yearly' ? 'primary' : 'text.secondary'}>
                    Yearly
                </Typography>
            </Box>
            {/* Navigation Buttons */}
            <FlexContainer sx={{ justifyContent: 'space-between', mt: 'auto' }}>
                <StyledButton variant="text" color="primary" onClick={() => navigate("/")}>
                    Go Back
                </StyledButton>
                <StyledButton variant="contained" color="primary" onClick={() => navigate('/addon')}>
                    Next Step
                </StyledButton>
            </FlexContainer>
        </FormContainer>
    );
}

export default PlanPage;